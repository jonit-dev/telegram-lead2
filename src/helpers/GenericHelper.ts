export class GenericHelper {
  public static getUrlQueryParamByName(name, url?) {
    if (!url) url = window.location.href;
    name = name.replace(/[[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  public static clientAlert = (message: string) => {
    if (typeof window !== "undefined") {
      // if we're on the client
      alert(message);
    }
  };

  public static crossBrowserUrlRedirect = (url: string, newPage?: false) => {
    if (newPage) {
      GenericHelper.windowOpen(url);
    }

    // https://stackoverflow.com/a/31223302/3192151
    setTimeout(function () {
      document.location.href = url;
    }, 250);
  };

  public static windowOpen(url: string) {
    // Reference: https://stackoverflow.com/questions/20696041/window-openurl-blank-not-working-on-imac-safari

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      // Safari doesn't like window.open, so lets use this alternative method.

      window.location.assign(url);
      return;
    }

    // for all other *decent* browsers, lets use window.open
    window.open(url);

    return;
  }
}
