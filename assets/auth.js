(() => {
  const accountsStorageKey = "ninaRasaAccounts";
  const currentUserStorageKey = "ninaRasaCurrentUser";
  const profileStoragePrefix = "ninaRasaProfile:";
  const protectedPages = new Set(["Dashboard.html", "Menu.html", "Kursi.html", "PesananSaya.html"]);
  const pageName = window.location.pathname.split("/").pop();

  function readAccounts() {
    const accounts = JSON.parse(localStorage.getItem(accountsStorageKey) || "{}");
    if (!accounts || typeof accounts !== "object" || Array.isArray(accounts)) {
      throw new Error("Data akun tidak valid.");
    }
    return accounts;
  }

  function getCurrentUsername() {
    return localStorage.getItem(currentUserStorageKey);
  }

  function getProfileKey(username = getCurrentUsername()) {
    if (!username) {
      return null;
    }
    return `${profileStoragePrefix}${username.toLowerCase()}`;
  }

  function getProfile(username = getCurrentUsername()) {
    const key = getProfileKey(username);
    return key ? JSON.parse(localStorage.getItem(key) || "null") : null;
  }

  function isProfileComplete(profile) {
    if (arguments.length === 0) {
      try {
        profile = getProfile();
      } catch (error) {
        return false;
      }
    }
    return Boolean(
      profile
      && ["username", "name", "email", "phone", "gender", "birthdate"]
        .every(field => typeof profile[field] === "string" && profile[field].trim())
    );
  }

  function redirectToNextStep() {
    window.location.replace(isProfileComplete() ? "Dashboard.html" : "Profile.html");
  }

  function requireLogin() {
    if (!getCurrentUsername()) {
      window.location.replace("Login.html");
      return false;
    }
    return true;
  }

  function register(username, password) {
    const normalizedUsername = username.trim().toLowerCase();
    const accounts = readAccounts();
    if (accounts[normalizedUsername]) {
      throw new Error("Username sudah digunakan. Silakan pilih username lain.");
    }

    accounts[normalizedUsername] = { username: username.trim(), password };
    localStorage.setItem(accountsStorageKey, JSON.stringify(accounts));
    localStorage.setItem(currentUserStorageKey, username.trim());
  }

  function login(username, password) {
    const account = readAccounts()[username.trim().toLowerCase()];
    if (!account || account.password !== password) {
      throw new Error("Username atau password tidak sesuai.");
    }
    localStorage.setItem(currentUserStorageKey, account.username);
  }

  function saveProfile(profile) {
    const username = getCurrentUsername();
    if (!username) {
      throw new Error("Silakan login kembali sebelum menyimpan profil.");
    }
    localStorage.setItem(getProfileKey(username), JSON.stringify(profile));
  }

  if (protectedPages.has(pageName)) {
    if (!requireLogin()) {
      document.documentElement.style.visibility = "hidden";
    } else if (!isProfileComplete()) {
      document.documentElement.style.visibility = "hidden";
      window.location.replace("Profile.html");
    }
  } else if (pageName === "Profile.html" && !requireLogin()) {
    document.documentElement.style.visibility = "hidden";
  }

  window.NinaRasaAuth = {
    getCurrentUsername,
    getProfile,
    isProfileComplete,
    login,
    redirectToNextStep,
    register,
    saveProfile
  };
})();
