var $wc_leads = $wc_leads || {
  doc: {
    url: JSON.parse(JSON.stringify(document.URL)),
    ref: JSON.parse(JSON.stringify(document.referrer)),
    search: JSON.parse(JSON.stringify(location.search)),
    hash: JSON.parse(JSON.stringify(location.hash)),
  },
};
$wc_leads.s4 = function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
if (typeof phbqslixugkynefhnzol === "undefined")
  var phbqslixugkynefhnzol = false;
if (typeof yrejzpicqjfxoquxuuaw === "undefined")
  var yrejzpicqjfxoquxuuaw = false;
if (phbqslixugkynefhnzol === false) {
  phbqslixugkynefhnzol = true;
  var gar = new XMLHttpRequest();
  gar.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) yrejzpicqjfxoquxuuaw = true;
  };
  gar.open("POST", "//process.iconnode.com/google-ads/", true);
  gar.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  gar.send();
}
if (bauwiruxzontakyuoxkw("wc_verification")) {
  var kvpairs = [];
  kvpairs.push(
    encodeURIComponent("wc_profile_id") + "=" + encodeURIComponent("121371")
  );
  var ver = new XMLHttpRequest();
  ver.open("POST", "//p.ksrndkehqnwntyxlhgto.com/verification/", true);
  ver.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  ver.send(kvpairs.join("&"));
}
(function (funcName, baseObj) {
  funcName = funcName || "wc_doc_ready";
  baseObj = baseObj || window;
  var readyList = [];
  var readyFired = false;
  var readyEventHandlersInstalled = false;
  function ready() {
    if (!readyFired) {
      readyFired = true;
      for (var i = 0; i < readyList.length; i++)
        readyList[i].fn.call(window, readyList[i].ctx);
      readyList = [];
    }
  }
  function readyStateChange() {
    if (document.readyState === "complete") ready();
  }
  baseObj[funcName] = function (callback, context) {
    if (readyFired) {
      setTimeout(function () {
        callback(context);
      }, 1);
      return;
    } else readyList.push({ fn: callback, ctx: context });
    if (
      document.readyState === "complete" ||
      (!document.attachEvent && document.readyState === "interactive")
    )
      setTimeout(ready, 1);
    else if (!readyEventHandlersInstalled) {
      if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", ready, false);
        window.addEventListener("load", ready, false);
      } else {
        document.attachEvent("onreadystatechange", readyStateChange);
        window.attachEvent("onload", ready);
      }
      readyEventHandlersInstalled = true;
    }
  };
})("wc_doc_ready", window);
if (window.addEventListener)
  window.addEventListener("message", wc_frame_message, false);
if (typeof wc_frame_parent !== "undefined" && wc_frame_parent)
  wc_frame_init(wc_frame_parent);
function wc_frame_message(event) {
  if (
    typeof event.data === "undefined" ||
    !event.data instanceof Array ||
    event.data.length < 3 ||
    event.data[0] !== 121371
  )
    return;
  if (event.data[1] === "ci") {
    if (!event.data[2].includes("+..+")) return;
    wc_create_init(event.data[2]);
  } else if (event.data[1] === "cr") {
    cookie = oqhaqzwnbjgcpycneryg("wc_client");
    if (typeof wc_frame_target === "undefined" && !wc_frame_target) return;
    child = document.querySelectorAll("iframe" + wc_frame_target);
    for (var f = 0; f < child.length; f++) {
      if (child[f])
        child[f].contentWindow.postMessage(
          [121371, "ci", cookie],
          event.origin
        );
    }
  }
}
function wc_frame_init(pd) {
  parent.postMessage([121371, "cr", ""], pd + "*");
}
var ilnfnxrqyrwnwhzydizj = "";
var ljwlemjhokqgwcfgbher = oqhaqzwnbjgcpycneryg("wc_client");
var glyhllmiqpawyaiephgc = oqhaqzwnbjgcpycneryg("wc_client_current");
var ygbiroraszmgfixidfbx = oqhaqzwnbjgcpycneryg("wc_swap");
var lusfpvsuqwpgzgkrrkio = oqhaqzwnbjgcpycneryg("wc_visitor");
var pnwxnirynzktfrtstlnb = bauwiruxzontakyuoxkw("wc_clear");
if (typeof gqnttmcumqahpthdocaw_121371 === "undefined")
  var gqnttmcumqahpthdocaw_121371 = false;
if (typeof nlalneaklrnkdcxeybga_121371 === "undefined")
  var nlalneaklrnkdcxeybga_121371 = false;
function wc_visitor_init() {
  var existing_visitor = bauwiruxzontakyuoxkw("wc_visitor");
  if (existing_visitor) var visitor = existing_visitor;
  else if (!lusfpvsuqwpgzgkrrkio || pnwxnirynzktfrtstlnb === "true")
    var visitor =
      "121371-" +
      $wc_leads.s4() +
      $wc_leads.s4() +
      "-" +
      $wc_leads.s4() +
      "-" +
      $wc_leads.s4() +
      "-" +
      $wc_leads.s4() +
      "-" +
      $wc_leads.s4() +
      $wc_leads.s4() +
      $wc_leads.s4();
  else var visitor = lusfpvsuqwpgzgkrrkio;
  var same_site = "SameSite=Lax;";
  if (typeof wc_frame_parent !== "undefined" && wc_frame_parent)
    same_site = "SameSite=None;Secure;";
  var i = 0;
  var root_domain;
  var parts = location.hostname.split(".");
  var test = "_gd" + new Date().getTime();
  while (
    i < parts.length - 1 &&
    document.cookie.indexOf(test + "=" + test) == -1
  ) {
    root_domain = parts.slice(-1 - ++i).join(".");
    document.cookie =
      test + "=" + test + ";domain=" + root_domain + ";" + same_site;
  }
  if (document.cookie.indexOf(test + "=" + test) == -1) {
    same_site = "SameSite=None;Secure;";
    while (
      i < parts.length - 1 &&
      document.cookie.indexOf(test + "=" + test) == -1
    ) {
      root_domain = parts.slice(-1 - ++i).join(".");
      document.cookie =
        test + "=" + test + ";domain=" + root_domain + ";" + same_site;
    }
  }
  var date = new Date();
  date.setSeconds(date.getSeconds() + 1);
  var expires = date.toGMTString();
  document.cookie =
    test + "=;expires=" + expires + ";domain=" + root_domain + ";" + same_site;
  var date = new Date();
  date.setTime(date.getTime() + 730 * 24 * 60 * 60 * 1000);
  var expires = date.toGMTString();
  document.cookie =
    "wc_visitor=" +
    visitor +
    ";expires=" +
    expires +
    ";domain=." +
    root_domain +
    ";path=/;" +
    same_site;
}
wc_visitor_init();
function wc_create_init(cookie_data) {
  if (cookie_data === "") {
    var source = "",
      medium = "",
      campaign = "",
      content = "",
      term = "",
      gid = "";
    var force_utm = bauwiruxzontakyuoxkw("force_utm");
    var visitor = oqhaqzwnbjgcpycneryg("wc_visitor");
    var gclid = bauwiruxzontakyuoxkw("gclid");
    var gbraid = bauwiruxzontakyuoxkw("gbraid");
    var wbraid = bauwiruxzontakyuoxkw("wbraid");
    var msclkid = bauwiruxzontakyuoxkw("msclkid");
    var fbclid = bauwiruxzontakyuoxkw("fbclid");
    //var fbc = bauwiruxzontakyuoxkw("_fbc");
    //var fbp = bauwiruxzontakyuoxkw("_fbp");
    var utm_source = bauwiruxzontakyuoxkw("utm_source");
    if (force_utm === "true" && utm_source) {
      source = utm_source;
      var utm_medium = bauwiruxzontakyuoxkw("utm_medium");
      if (utm_medium) {
        medium = utm_medium;
      } else {
        medium = "none";
      }
    } else if (gclid || gbraid || wbraid) {
      source = "google";
      medium = "cpc";
    } else if (msclkid) {
      source = "bing";
      medium = "cpc";
    } else if (fbclid) {
      source = "facebook";
      medium = "cpc";
    } else if (utm_source) {
      source = utm_source;
      var utm_medium = bauwiruxzontakyuoxkw("utm_medium");
      if (utm_medium) {
        medium = utm_medium;
      } else {
        medium = "none";
      }
    } else {
      if ($wc_leads.doc.ref) {
        var host = $wc_leads.doc.ref.split("/")[2];
        var host_split = host.split(".");
        if (host_split.length > 2) {
          var domain = "";
          for (var i = 0; i < host_split.length; i++) {
            if (host_split[i] !== "www") {
              domain += host_split[i];
              if (i !== host_split.length - 1) {
                domain += ".";
              }
            }
          }
        } else {
          var domain = host;
        }
        var utm_medium = bauwiruxzontakyuoxkw("utm_medium");
        if (
          domain.match(/^(.*)google(.*)$/) &&
          domain !== window.location.hostname
        ) {
          source = "google";
          if (utm_medium.match(/ppc/i) || utm_medium.match(/cpc/i)) {
            medium = "cpc";
          } else {
            medium += "organic";
          }
        } else if (
          domain.match(/^(.*)yahoo(.*)$/) &&
          domain !== window.location.hostname
        ) {
          source = "yahoo";
          if (utm_medium.match(/ppc/i) || utm_medium.match(/cpc/i)) {
            medium = "cpc";
          } else {
            medium += "organic";
          }
        } else if (
          domain.match(/^(.*)bing(.*)$/) &&
          domain !== window.location.hostname
        ) {
          source = "bing";
          if (utm_medium.match(/ppc/i) || utm_medium.match(/cpc/i)) {
            medium = "cpc";
          } else {
            medium += "organic";
          }
        } else {
          source = domain;
          medium = "referral";
        }
      } else {
        source = "direct";
        medium = "none";
      }
    }
    if (gclid) {
      gid = gclid;
    } else if (gbraid) {
      gid = gbraid;
    } else if (wbraid) {
      gid = wbraid;
    }
    var utm_campaign = bauwiruxzontakyuoxkw("utm_campaign");
    var wc_campaign = bauwiruxzontakyuoxkw("campaign");
    if (utm_campaign) {
      campaign = utm_campaign;
    } else if (wc_campaign) {
      campaign = wc_campaign;
    }
    var utm_content = bauwiruxzontakyuoxkw("utm_content");
    var wc_content = bauwiruxzontakyuoxkw("content");
    if (utm_content) {
      content = utm_content;
    } else if (wc_content) {
      content = wc_content;
    }
    var utm_term = bauwiruxzontakyuoxkw("utm_term");
    var utm_keyword = bauwiruxzontakyuoxkw("utm_keyword");
    var wc_keyword = bauwiruxzontakyuoxkw("keyword");
    if (utm_term) {
      term = utm_term;
    } else if (utm_keyword) {
      term = utm_keyword;
    } else if (wc_keyword) {
      term = wc_keyword;
    }
    if (term === "") {
      if (source === "bing" || source === "google") {
        var referrer_keyword = efbdmcsgiiideurvasjn("q");
        if (referrer_keyword) term = referrer_keyword;
      }
    }
    if (
      ljwlemjhokqgwcfgbher &&
      glyhllmiqpawyaiephgc &&
      pnwxnirynzktfrtstlnb !== "true"
    ) {
      if (medium === "referral") {
        var existing_source = source;
        var working_source = existing_source.split(".");
        if (working_source.length > 2) {
          working_source.reverse();
          existing_source = working_source[1] + "." + working_source[0];
        }
        var existing_hostname = location.hostname;
        var working_hostname = existing_hostname.split(".");
        if (working_hostname.length > 2) {
          working_hostname.reverse();
          existing_hostname = working_hostname[1] + "." + working_hostname[0];
        }
        if (existing_source === existing_hostname) {
          return;
        }
      }
      var existing_source = "",
        existing_medium = "",
        existing_campaign = "",
        existing_content = "",
        existing_term = "";
      var existing_cookie = glyhllmiqpawyaiephgc.split("+..+");
      if (
        source === existing_cookie[0] &&
        medium === existing_cookie[1] &&
        campaign === existing_cookie[2] &&
        content === existing_cookie[3] &&
        term === existing_cookie[4] &&
        gid === existing_cookie[5] &&
        msclkid === existing_cookie[8] &&
        fbclid === existing_cookie[9] &&
        //fbc === existing_cookie[10] &&
        //fbp === existing_cookie[11]
      ) {
        return;
      }
    }
    ilnfnxrqyrwnwhzydizj =
      encodeURIComponent(source) +
      "+..+" +
      encodeURIComponent(medium) +
      "+..+" +
      encodeURIComponent(campaign) +
      "+..+" +
      encodeURIComponent(content) +
      "+..+" +
      encodeURIComponent(term) +
      "+..+" +
      encodeURIComponent(gid) +
      "+..+" +
      encodeURIComponent($wc_leads.doc.url) +
      "+..+" +
      encodeURIComponent(visitor) +
      "+..+" +
      encodeURIComponent(msclkid) +
      "+..+" +
      encodeURIComponent(fbclid);
      "+..+" +
      //encodeURIComponent(fbc);
      //"+..+" +
      //encodeURIComponent(fbp);
  } else {
    ilnfnxrqyrwnwhzydizj = cookie_data;
  }
  var same_site = "SameSite=Lax;";
  if (typeof wc_frame_parent !== "undefined" && wc_frame_parent)
    same_site = "SameSite=None;Secure;";
  var i = 0;
  var root_domain;
  var parts = location.hostname.split(".");
  var test = "_gd" + new Date().getTime();
  while (
    i < parts.length - 1 &&
    document.cookie.indexOf(test + "=" + test) == -1
  ) {
    root_domain = parts.slice(-1 - ++i).join(".");
    document.cookie =
      test + "=" + test + ";domain=" + root_domain + ";" + same_site;
  }
  if (document.cookie.indexOf(test + "=" + test) == -1) {
    same_site = "SameSite=None;Secure;";
    while (
      i < parts.length - 1 &&
      document.cookie.indexOf(test + "=" + test) == -1
    ) {
      root_domain = parts.slice(-1 - ++i).join(".");
      document.cookie =
        test + "=" + test + ";domain=" + root_domain + ";" + same_site;
    }
  }
  var date = new Date();
  date.setSeconds(date.getSeconds() + 1);
  var expires = date.toGMTString();
  document.cookie =
    test + "=;expires=" + expires + ";domain=" + root_domain + ";" + same_site;
  var date = new Date();
  date.setTime(date.getTime() + 180 * 24 * 60 * 60 * 1000);
  var expires = date.toGMTString();
  if (!ljwlemjhokqgwcfgbher || pnwxnirynzktfrtstlnb === "true")
    document.cookie =
      "wc_client=" +
      ilnfnxrqyrwnwhzydizj +
      ";expires=" +
      expires +
      ";domain=." +
      root_domain +
      ";path=/;" +
      same_site;
  document.cookie =
    "wc_client_current=" +
    ilnfnxrqyrwnwhzydizj +
    ";expires=;domain=." +
    root_domain +
    ";path=/;" +
    same_site;
  if (ygbiroraszmgfixidfbx && pnwxnirynzktfrtstlnb === "true")
    document.cookie =
      "wc_swap=;expires=" +
      expires +
      ";domain=." +
      root_domain +
      ";path=/;" +
      same_site;
}
if (typeof wc_frame_parent === "undefined") wc_create_init("");
if (oqhaqzwnbjgcpycneryg("wc_client")) {
  wc_doc_ready(djteiyewvcuvyogyifuj);
} else {
  window.onload = function () {
    djteiyewvcuvyogyifuj();
  };
}
function djteiyewvcuvyogyifuj() {
  if (!Object.entries) {
    Object.entries = function (obj) {
      var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i);
      while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];
      return resArray;
    };
  }
  var number_list = [];
  var keyword_tracking_list = [];
  var form_list = [];
  var form_id_sub = 0;
  var form_submit = [],
    fin = [],
    fid = [];
  if (nlalneaklrnkdcxeybga_121371 === false) {
    nlalneaklrnkdcxeybga_121371 = true;
    lnefmbjncmddwbekmbzd();
  }
  dmljgbyqoircedaceakh();
  form_init();
  if (document.addEventListener) {
    document.addEventListener("click", function (e) {
      form_init();
    });
    document.addEventListener("keydown", function (e) {
      form_init();
    });
    document.addEventListener("mousemove", function (e) {
      form_init();
    });
  } else {
    document.attachEvent("onclick", function (e) {
      form_init();
    });
    document.attachEvent("onkeydown", function (e) {
      form_init();
    });
    document.attachEvent("onmousemove", function (e) {
      form_init();
    });
  }
  function form_init() {
    var passiveSupported = false;
    try {
      var options = {
        get passive() {
          passiveSupported = true;
        },
      };
      window.addEventListener("test", options, options);
      window.removeEventListener("test", options, options);
    } catch (err) {
      passiveSupported = false;
    }
    for (var i = 0; i < form_list.length; i++) {
      form_name = form_list[i][1];
      form_id = form_list[i][0];
      var form_full = document.querySelectorAll("form" + form_name);
      if (form_list[i][2]) {
        var alt_submit = document.querySelectorAll(
          "form" + form_name + " " + form_list[i][2]
        );
        if (alt_submit.length === 0) {
          var alt_submit = document.querySelectorAll(form_list[i][2]);
        }
      } else {
        var alt_submit = "";
      }
      for (var f = 0; f < form_full.length; f++) {
        if (form_full[f]) {
          var current_form = form_id + i + f;
          fin[current_form] = form_full[f];
          fid[current_form] = form_id;
          var sec = 0;
          if (document.addEventListener) {
            if (form_list[i][2] !== "") {
              if (typeof alt_submit[f] !== "undefined") {
                if (
                  typeof form_submit[current_form + "_click"] !== "undefined"
                ) {
                  alt_submit[f].removeEventListener(
                    "click",
                    form_submit[current_form + "_click"]
                  );
                }
                alt_submit[f].addEventListener(
                  "click",
                  (form_submit[current_form + "_click"] = (function (
                    current_form
                  ) {
                    return function () {
                      form_process(fin[current_form], fid[current_form]);
                    };
                  })(current_form)),
                  false
                );
                if (
                  typeof form_submit[current_form + "_touch"] !== "undefined"
                ) {
                  alt_submit[f].removeEventListener(
                    "touchstart",
                    form_submit[current_form + "_touch"]
                  );
                }
                alt_submit[f].addEventListener(
                  "touchstart",
                  (form_submit[current_form + "_touch"] = (function (
                    current_form
                  ) {
                    return function () {
                      form_process(fin[current_form], fid[current_form]);
                    };
                  })(current_form)),
                  passiveSupported ? { passive: true, capture: false } : false
                );
              }
            } else {
              var sub_elements = fin[current_form].elements;
              for (var e = 0; e < sub_elements.length; e++) {
                if (sub_elements[e].type === "submit") {
                  if (
                    typeof form_submit[current_form + "_click"] !== "undefined"
                  ) {
                    sub_elements[e].removeEventListener(
                      "click",
                      form_submit[current_form + "_click"]
                    );
                  }
                  sub_elements[e].addEventListener(
                    "click",
                    (form_submit[current_form + "_click"] = (function (
                      current_form
                    ) {
                      return function () {
                        form_process(fin[current_form], fid[current_form]);
                      };
                    })(current_form)),
                    false
                  );
                  if (
                    typeof form_submit[current_form + "_touch"] !== "undefined"
                  ) {
                    sub_elements[e].removeEventListener(
                      "touchstart",
                      form_submit[current_form + "_touch"]
                    );
                  }
                  sub_elements[e].addEventListener(
                    "touchstart",
                    (form_submit[current_form + "_touch"] = (function (
                      current_form
                    ) {
                      return function () {
                        form_process(fin[current_form], fid[current_form]);
                      };
                    })(current_form)),
                    passiveSupported ? { passive: true, capture: false } : false
                  );
                  sec++;
                  break;
                }
              }
              if (sec === 0) {
                if (typeof form_submit[current_form] !== "undefined") {
                  fin[current_form].removeEventListener(
                    "submit",
                    form_submit[current_form]
                  );
                }
                fin[current_form].addEventListener(
                  "submit",
                  (form_submit[current_form] = (function (current_form) {
                    return function () {
                      form_process(fin[current_form], fid[current_form]);
                    };
                  })(current_form)),
                  false
                );
              }
            }
          } else {
            if (form_list[i][2] !== "") {
              if (typeof alt_submit[f] !== "undefined") {
                if (typeof form_submit[current_form] !== "undefined") {
                  alt_submit[f].detachEvent(
                    "onclick",
                    form_submit[current_form]
                  );
                }
                alt_submit[f].attachEvent(
                  "onclick",
                  (form_submit[current_form] = (function (current_form) {
                    return function () {
                      form_process(fin[current_form], fid[current_form]);
                    };
                  })(current_form)),
                  false
                );
              }
            } else {
              var sub_elements = fin[current_form].elements;
              for (var e = 0; e < sub_elements.length; e++) {
                if (sub_elements[e].type === "submit") {
                  if (typeof form_submit[current_form] !== "undefined") {
                    sub_elements[e].detachEvent(
                      "onclick",
                      form_submit[current_form]
                    );
                  }
                  sub_elements[e].attachEvent(
                    "onclick",
                    (form_submit[current_form] = (function (current_form) {
                      return function () {
                        form_process(fin[current_form], fid[current_form]);
                      };
                    })(current_form)),
                    false
                  );
                  sec++;
                  break;
                }
              }
              if (sec === 0) {
                if (typeof form_submit[current_form] !== "undefined") {
                  fin[current_form].detachEvent(
                    "onsubmit",
                    form_submit[current_form]
                  );
                }
                fin[current_form].attachEvent(
                  "onsubmit",
                  (form_submit[current_form] = (function (current_form) {
                    return function () {
                      form_process(fin[current_form], fid[current_form]);
                    };
                  })(current_form)),
                  false
                );
              }
            }
          }
        }
      }
    }
  }
  function form_process(form, id) {
    var kvpairs = [];
    var form_set = form;
    var re = 0;
    var labels = document.getElementsByTagName("label");
    if (labels) {
      for (var i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor) {
          var elem = document.getElementById(labels[i].htmlFor);
          if (elem) {
            elem.label = labels[i];
          }
        }
      }
    }
    for (var i = 0; i < form_set.elements.length; i++) {
      var fe = form_set.elements[i];
      if (
        (fe.getAttribute("aria-required") === "true" ||
          fe.hasAttribute("required") ||
          fe.classList.contains("required")) &&
        !fe.disabled &&
        fe.offsetParent
      ) {
        if (fe.type === "email") {
          if (
            fe.value === "" ||
            !fe.value.match(
              /^[a-zA-Z0-9.!#$%&â€™*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)/
            )
          )
            re++;
        } else if (fe.type === "radio") {
          var rc = 0;
          for (var r = 0; r < form_set.elements.length; r++) {
            var rb = form_set.elements[r];
            if (rb.type === "radio" && rb.name === fe.name) {
              if (rb.checked) rc++;
            }
          }
          if (rc === 0) re++;
        } else if (fe.type === "checkbox") {
          if (fe.checked === false) re++;
        } else {
          if (fe.value === "") re++;
        }
      }
      if (fe.hasAttribute("pattern") && fe.getAttribute("pattern")) {
        var regex_valid = true;
        try {
          new RegExp(fe.getAttribute("pattern"));
        } catch (e) {
          regex_valid = false;
        }
        if (regex_valid) {
          var re_match = new RegExp(fe.getAttribute("pattern"));
          if (!re_match.test(fe.value)) re++;
        }
      }
      if (
        fe.value &&
        !fe.name.match(/captcha/i) &&
        ((fe.hasAttribute("data-wc-ignore") &&
          fe.getAttribute("data-wc-ignore") !== "true") ||
          !fe.hasAttribute("data-wc-ignore"))
      ) {
        switch (fe.type) {
          case "text":
          case "email":
          case "number":
          case "range":
          case "tel":
          case "time":
          case "url":
          case "week":
          case "month":
          case "date":
          case "datetime":
          case "datetime-local":
          case "textarea":
          case "select-one":
            if (fe.getAttribute("id") && fe.label) {
              if (fe.label.innerText && /\S/.test(fe.label.innerText)) {
                kvpairs.push(
                  encodeURIComponent(fe.label.innerText) +
                    "=" +
                    encodeURIComponent(fe.value)
                );
              } else if (
                fe.label.textContent &&
                /\S/.test(fe.label.textContent)
              ) {
                kvpairs.push(
                  encodeURIComponent(fe.label.textContent) +
                    "=" +
                    encodeURIComponent(fe.value)
                );
              } else if (
                fe.getAttribute("aria-label") &&
                /\S/.test(fe.getAttribute("aria-label"))
              ) {
                kvpairs.push(
                  encodeURIComponent(fe.getAttribute("aria-label")) +
                    "=" +
                    encodeURIComponent(fe.value)
                );
              } else if (
                fe.getAttribute("placeholder") &&
                /\S/.test(fe.getAttribute("placeholder"))
              ) {
                kvpairs.push(
                  encodeURIComponent(fe.getAttribute("placeholder")) +
                    "=" +
                    encodeURIComponent(fe.value)
                );
              } else {
                kvpairs.push(
                  encodeURIComponent(fe.name) +
                    "=" +
                    encodeURIComponent(fe.value)
                );
              }
            } else if (
              fe.getAttribute("aria-label") &&
              /\S/.test(fe.getAttribute("aria-label"))
            ) {
              kvpairs.push(
                encodeURIComponent(fe.getAttribute("aria-label")) +
                  "=" +
                  encodeURIComponent(fe.value)
              );
            } else if (
              fe.getAttribute("placeholder") &&
              /\S/.test(fe.getAttribute("placeholder"))
            ) {
              kvpairs.push(
                encodeURIComponent(fe.getAttribute("placeholder")) +
                  "=" +
                  encodeURIComponent(fe.value)
              );
            } else {
              kvpairs.push(
                encodeURIComponent(fe.name) + "=" + encodeURIComponent(fe.value)
              );
            }
            break;
          case "checkbox":
          case "radio":
            if (fe.checked) {
              if (fe.getAttribute("id") && fe.label) {
                if (fe.label.innerText && /\S/.test(fe.label.innerText)) {
                  kvpairs.push(
                    encodeURIComponent(fe.label.innerText) +
                      "=" +
                      encodeURIComponent(fe.value)
                  );
                } else if (
                  fe.label.textContent &&
                  /\S/.test(fe.label.textContent)
                ) {
                  kvpairs.push(
                    encodeURIComponent(fe.label.textContent) +
                      "=" +
                      encodeURIComponent(fe.value)
                  );
                } else if (
                  fe.getAttribute("aria-label") &&
                  /\S/.test(fe.getAttribute("aria-label"))
                ) {
                  kvpairs.push(
                    encodeURIComponent(fe.getAttribute("aria-label")) +
                      "=" +
                      encodeURIComponent(fe.value)
                  );
                } else if (
                  fe.getAttribute("placeholder") &&
                  /\S/.test(fe.getAttribute("placeholder"))
                ) {
                  kvpairs.push(
                    encodeURIComponent(fe.getAttribute("placeholder")) +
                      "=" +
                      encodeURIComponent(fe.value)
                  );
                } else {
                  kvpairs.push(
                    encodeURIComponent(fe.name) +
                      "=" +
                      encodeURIComponent(fe.value)
                  );
                }
              } else if (
                fe.getAttribute("aria-label") &&
                /\S/.test(fe.getAttribute("aria-label"))
              ) {
                kvpairs.push(
                  encodeURIComponent(fe.getAttribute("aria-label")) +
                    "=" +
                    encodeURIComponent(fe.value)
                );
              } else if (
                fe.getAttribute("placeholder") &&
                /\S/.test(fe.getAttribute("placeholder"))
              ) {
                kvpairs.push(
                  encodeURIComponent(fe.getAttribute("placeholder")) +
                    "=" +
                    encodeURIComponent(fe.value)
                );
              } else {
                kvpairs.push(
                  encodeURIComponent(fe.name) +
                    "=" +
                    encodeURIComponent(fe.value)
                );
              }
            }
            break;
          case "select-multiple":
            for (var o = 0; o < fe.options.length; o++) {
              if (fe.options[o].selected) {
                if (fe.getAttribute("id") && fe.label) {
                  if (fe.label.innerText && /\S/.test(fe.label.innerText)) {
                    kvpairs.push(
                      encodeURIComponent(fe.label.innerText) +
                        "[]=" +
                        encodeURIComponent(fe.options[o].value)
                    );
                  } else if (
                    fe.label.textContent &&
                    /\S/.test(fe.label.textContent)
                  ) {
                    kvpairs.push(
                      encodeURIComponent(fe.label.textContent) +
                        "[]=" +
                        encodeURIComponent(fe.options[o].value)
                    );
                  } else if (
                    fe.getAttribute("aria-label") &&
                    /\S/.test(fe.getAttribute("aria-label"))
                  ) {
                    kvpairs.push(
                      encodeURIComponent(fe.getAttribute("aria-label")) +
                        "[]=" +
                        encodeURIComponent(fe.options[o].value)
                    );
                  } else if (fe.getAttribute("placeholder")) {
                    kvpairs.push(
                      encodeURIComponent(fe.getAttribute("placeholder")) +
                        "[]=" +
                        encodeURIComponent(fe.options[o].value)
                    );
                  } else {
                    kvpairs.push(
                      encodeURIComponent(fe.name) +
                        "[]=" +
                        encodeURIComponent(fe.options[o].value)
                    );
                  }
                } else if (
                  fe.getAttribute("aria-label") &&
                  /\S/.test(fe.getAttribute("aria-label"))
                ) {
                  kvpairs.push(
                    encodeURIComponent(fe.getAttribute("aria-label")) +
                      "[]=" +
                      encodeURIComponent(fe.options[o].value)
                  );
                } else if (
                  fe.getAttribute("placeholder") &&
                  /\S/.test(fe.getAttribute("placeholder"))
                ) {
                  kvpairs.push(
                    encodeURIComponent(fe.getAttribute("placeholder")) +
                      "[]=" +
                      encodeURIComponent(fe.options[o].value)
                  );
                } else {
                  kvpairs.push(
                    encodeURIComponent(fe.name) +
                      "[]=" +
                      encodeURIComponent(fe.options[o].value)
                  );
                }
              }
            }
            break;
        }
      }
    }
    if (re === 0) {
      if (0 < kvpairs.length) {
        if (form_id_sub === id) return;
        form_id_sub = id;
        setTimeout(function () {
          form_id_sub = 0;
        }, 2500);
        kvpairs.push(
          encodeURIComponent("wc_profile_id") +
            "=" +
            encodeURIComponent("121371")
        );
        kvpairs.push(
          encodeURIComponent("wc_form_set_id") + "=" + encodeURIComponent(id)
        );
        if (oqhaqzwnbjgcpycneryg("wc_client"))
          kvpairs.push(
            encodeURIComponent("wc_client") +
              "=" +
              encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
          );
        else if (typeof ilnfnxrqyrwnwhzydizj !== "undefined")
          kvpairs.push(
            encodeURIComponent("wc_client") +
              "=" +
              encodeURIComponent(ilnfnxrqyrwnwhzydizj)
          );
        if (oqhaqzwnbjgcpycneryg("wc_client"))
          kvpairs.push(
            encodeURIComponent("wc_client_current") +
              "=" +
              encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
          );
        else if (typeof ilnfnxrqyrwnwhzydizj !== "undefined")
          kvpairs.push(
            encodeURIComponent("wc_client_current") +
              "=" +
              encodeURIComponent(ilnfnxrqyrwnwhzydizj)
          );
        kvpairs.push(
          encodeURIComponent("wc_page") +
            "=" +
            encodeURIComponent($wc_leads.doc.url)
        );
      }
      var data = kvpairs.join("&");
      if (data) {
        if (navigator.sendBeacon && yrejzpicqjfxoquxuuaw) {
          navigator.sendBeacon("//p.ksrndkehqnwntyxlhgto.com/lead/form", data);
        } else {
          var request = new XMLHttpRequest();
          request.open("POST", "//p.ksrndkehqnwntyxlhgto.com/lead/form", true);
          request.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded; charset=UTF-8"
          );
          request.send(data);
        }
      }
    }
  }
  function dmljgbyqoircedaceakh() {
    var keyword_tracking_cookie = oqhaqzwnbjgcpycneryg("wc_swap");
    var sr = 0;
    var existing_keyword_list = [];
    if (keyword_tracking_cookie) {
      if (keyword_tracking_cookie.indexOf("+..+") != -1)
        var wc_tracking_numbers = keyword_tracking_cookie.split("+..+");
      else var wc_tracking_numbers = keyword_tracking_cookie.split("|");
      var swap_loop = wc_tracking_numbers.length / 3;
      for (var i = 0; i < swap_loop; i++) {
        for (var n = 0; n < keyword_tracking_list.length; n++) {
          if (keyword_tracking_list[n][0] == wc_tracking_numbers[i * 3 + 2])
            sr++;
        }
      }
    }
    var clear_run = true;
    if (
      pnwxnirynzktfrtstlnb === "true" &&
      gqnttmcumqahpthdocaw_121371 === false
    )
      clear_run = false;
    if (keyword_tracking_cookie && sr > 0 && clear_run) {
      for (var i = 0; i < swap_loop; i++) {
        existing_keyword_list[i] = wc_tracking_numbers[i * 3 + 2];
        new_number = wc_tracking_numbers[i * 3];
        old_number = wc_tracking_numbers[i * 3 + 1];
        "undefined" !== typeof old_number &&
          "undefined" !== typeof new_number &&
          nbfpiriuvmssvizfywxh(old_number, new_number, 0);
      }
    }
    var source, medium, campaign, content, keyword;
    var active_keyword_list = [];
    var ak = 0;
    var value = "; " + document.cookie;
    var current_url = $wc_leads.doc.url;
    var parts = value.split("; wc_client=");
    var c_value = parts.pop().split(";").shift();
    if (c_value.indexOf("+..+") != -1) {
      source = c_value.split("+..+")[0];
      medium = c_value.split("+..+")[1];
      campaign = c_value.split("+..+")[2];
      content = c_value.split("+..+")[3];
      keyword = c_value.split("+..+")[4];
    } else {
      source = c_value.split("|")[0];
      medium = c_value.split("|")[1];
      campaign = c_value.split("|")[2];
      content = c_value.split("|")[3];
      keyword = c_value.split("|")[4];
    }
    function keyword_target(keyword_tracking_cookie) {
      for (var n = 0; n < keyword_tracking_list.length; n++) {
        var keyword_tracking_check = 0;
        for (var i = 0; i < existing_keyword_list.length; i++) {
          if (existing_keyword_list[i] === keyword_tracking_list[n][0])
            keyword_tracking_check++;
        }
        if (!keyword_tracking_list[n][9] && keyword_tracking_check > 0) return;
        if (keyword_tracking_list[n][9]) {
          var swap_check = 0;
          var swap_pages = keyword_tracking_list[n][9].split(",");
          for (var sp = 0; sp < swap_pages.length; sp++) {
            if (swap_pages[sp].slice(-1) === "*") {
              if (
                current_url.includes(
                  swap_pages[sp].substr(0, swap_pages[sp].length - 1)
                )
              ) {
                swap_check++;
              }
            } else if (swap_pages[sp] === current_url) {
              swap_check++;
            }
          }
          if (swap_check === 0) continue;
        }
        if (
          keyword_tracking_list[n][1] == source &&
          keyword_tracking_list[n][2] == medium
        ) {
          if (
            (keyword_tracking_list[n][3] &&
              keyword_tracking_list[n][3] !== campaign) ||
            (keyword_tracking_list[n][4] &&
              keyword_tracking_list[n][4] !== content) ||
            (keyword_tracking_list[n][5] &&
              keyword_tracking_list[n][5] !== keyword)
          )
            continue;
          active_keyword_list[ak] = [
            "" + keyword_tracking_list[n][0] + "",
            "" + keyword_tracking_list[n][1] + "",
            "" + keyword_tracking_list[n][2] + "",
            "" + keyword_tracking_list[n][10] + "",
          ];
          ak++;
        } else if (
          keyword_tracking_list[n][1] == "default" &&
          keyword_tracking_list[n][2] == "default"
        ) {
          if (
            keyword_tracking_list[n][6] == 0 &&
            keyword_tracking_list[n][7] == 0 &&
            keyword_tracking_list[n][8] == 0
          ) {
            active_keyword_list[ak] = [
              "" + keyword_tracking_list[n][0] + "",
              "default",
              "default",
              "" + keyword_tracking_list[n][10] + "",
            ];
            ak++;
          } else if (
            keyword_tracking_list[n][6] == 1 &&
            source != "direct" &&
            medium != "none" &&
            keyword_tracking_list[n][7] == 0 &&
            keyword_tracking_list[n][8] == 0
          ) {
            active_keyword_list[ak] = [
              "" + keyword_tracking_list[n][0] + "",
              "default",
              "default",
              "" + keyword_tracking_list[n][10] + "",
            ];
            ak++;
          } else if (
            keyword_tracking_list[n][6] == 0 &&
            keyword_tracking_list[n][7] == 1 &&
            medium != "organic" &&
            keyword_tracking_list[n][8] == 0
          ) {
            active_keyword_list[ak] = [
              "" + keyword_tracking_list[n][0] + "",
              "default",
              "default",
              "" + keyword_tracking_list[n][10] + "",
            ];
            ak++;
          } else if (
            keyword_tracking_list[n][6] == 0 &&
            keyword_tracking_list[n][7] == 0 &&
            keyword_tracking_list[n][8] == 1 &&
            medium != "cpc"
          ) {
            active_keyword_list[ak] = [
              "" + keyword_tracking_list[n][0] + "",
              "default",
              "default",
              "" + keyword_tracking_list[n][10] + "",
            ];
            ak++;
          } else if (
            keyword_tracking_list[n][6] == 1 &&
            source != "direct" &&
            medium != "none" &&
            keyword_tracking_list[n][7] == 1 &&
            medium != "organic" &&
            keyword_tracking_list[n][8] == 0
          ) {
            active_keyword_list[ak] = [
              "" + keyword_tracking_list[n][0] + "",
              "default",
              "default",
              "" + keyword_tracking_list[n][10] + "",
            ];
            ak++;
          } else if (
            keyword_tracking_list[n][6] == 1 &&
            source != "direct" &&
            medium != "none" &&
            keyword_tracking_list[n][7] == 0 &&
            keyword_tracking_list[n][8] == 1 &&
            medium != "cpc"
          ) {
            active_keyword_list[ak] = [
              "" + keyword_tracking_list[n][0] + "",
              "default",
              "default",
              "" + keyword_tracking_list[n][10] + "",
            ];
            ak++;
          } else if (
            keyword_tracking_list[n][6] == 0 &&
            keyword_tracking_list[n][7] == 1 &&
            medium != "organic" &&
            keyword_tracking_list[n][8] == 1 &&
            medium != "cpc"
          ) {
            active_keyword_list[ak] = [
              "" + keyword_tracking_list[n][0] + "",
              "default",
              "default",
              "" + keyword_tracking_list[n][10] + "",
            ];
            ak++;
          } else if (
            keyword_tracking_list[n][6] == 1 &&
            source != "direct" &&
            medium != "none" &&
            keyword_tracking_list[n][7] == 1 &&
            medium != "organic" &&
            keyword_tracking_list[n][8] == 1 &&
            medium != "cpc"
          ) {
            active_keyword_list[ak] = [
              "" + keyword_tracking_list[n][0] + "",
              "default",
              "default",
              "" + keyword_tracking_list[n][10] + "",
            ];
            ak++;
          }
        }
      }
    }
    keyword_target(keyword_tracking_cookie);
    if (
      active_keyword_list.length > 0 &&
      gqnttmcumqahpthdocaw_121371 === false
    ) {
      gqnttmcumqahpthdocaw_121371 = true;
      var active_keyword_list_id = "";
      for (var t = 0; t < active_keyword_list.length; t++)
        active_keyword_list_id += active_keyword_list[t][0] + "+..+";
      var kvpairs = [];
      kvpairs.push(
        encodeURIComponent("wc_profile_id") + "=" + encodeURIComponent("121371")
      );
      kvpairs.push(
        encodeURIComponent("wc_client") +
          "=" +
          encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
      );
      kvpairs.push(
        encodeURIComponent("wc_client_current") +
          "=" +
          encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
      );
      kvpairs.push(
        encodeURIComponent("wc_keyword_campaign_list") +
          "=" +
          encodeURIComponent(active_keyword_list_id)
      );
      kvpairs.push(
        encodeURIComponent("wc_current_url") +
          "=" +
          encodeURIComponent($wc_leads.doc.url)
      );
      var data = kvpairs.join("&");
      if (data) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
          if (request.readyState == 4) {
            khgahvydosnkcpvjwdip(request.responseText);
            var wc_tracking_numbers = request.responseText.split("+..+");
            var wc_tn = [];
            var wc_dynamic_mode = 0;
            for (var wtn = 0; wtn < wc_tracking_numbers.length / 3 - 1; wtn++) {
              var wc_dynamic_destination = 0;
              if (
                "undefined" !== typeof wc_tracking_numbers[wtn * 3 + 1] &&
                "undefined" !== typeof wc_tracking_numbers[wtn * 3]
              ) {
                for (var dd = 0; dd < active_keyword_list.length; dd++) {
                  if (
                    active_keyword_list[dd][0] ==
                    wc_tracking_numbers[wtn * 3 + 2]
                  ) {
                    if (active_keyword_list[dd][3] == 1) {
                      wc_dynamic_mode = 1;
                      wc_dynamic_destination = 1;
                    }
                    break;
                  }
                }
                var wc_dynamic_swapped = nbfpiriuvmssvizfywxh(
                  wc_tracking_numbers[wtn * 3 + 1],
                  wc_tracking_numbers[wtn * 3],
                  wc_dynamic_destination
                );
                if (wc_dynamic_destination)
                  wc_tn.push(
                    wc_tracking_numbers[wtn * 3] + "::" + wc_dynamic_swapped
                  );
                else wc_tn.push(wc_tracking_numbers[wtn * 3] + "::");
              }
            }
            kvpairs.splice(3, 1);
            var wc_tn_data = wc_tn.join("+..+");
            kvpairs.push(
              encodeURIComponent("wc_tn") + "=" + encodeURIComponent(wc_tn_data)
            );
            var data_update = kvpairs.join("&");
            if (data_update) {
              function update_number(data_update, run_count) {
                var request = new XMLHttpRequest();
                request.open(
                  "POST",
                  "//p.ksrndkehqnwntyxlhgto.com/keyword/",
                  true
                );
                request.setRequestHeader(
                  "Content-Type",
                  "application/x-www-form-urlencoded; charset=UTF-8"
                );
                request.send(data_update);
                if (run_count >= 2) clearInterval(run_update);
              }
              if (wc_dynamic_mode) update_number(data_update, 0);
              var run_count = 0;
              var run_update = setInterval(function () {
                update_number(data_update, run_count++);
              }, 60000);
            }
          }
        };
        request.open("POST", "//p.ksrndkehqnwntyxlhgto.com/keyword/", true);
        request.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8"
        );
        request.send(data);
      }
    } else if (!keyword_tracking_cookie) {
      function number_target() {
        for (var n = 0; n < number_list.length; n++) {
          if (number_list[n][2] == source && number_list[n][3] == medium) {
            if (
              (number_list[n][4] && number_list[n][4] !== campaign) ||
              (number_list[n][5] && number_list[n][5] !== content) ||
              (number_list[n][6] && number_list[n][6] !== keyword)
            )
              continue;
            new_number = number_list[n][0];
            old_number = number_list[n][1];
            "undefined" !== typeof old_number &&
              "undefined" !== typeof new_number &&
              nbfpiriuvmssvizfywxh(old_number, new_number, 0);
          } else if (
            number_list[n][2] == "default" &&
            number_list[n][3] == "default"
          ) {
            new_number = number_list[n][0];
            old_number = number_list[n][1];
            "undefined" !== typeof old_number &&
              "undefined" !== typeof new_number &&
              nbfpiriuvmssvizfywxh(old_number, new_number, 0);
          }
        }
      }
      number_target();
    }
  }
}
function lnefmbjncmddwbekmbzd() {
  var gccwygnbjikjcbqxlcea = oqhaqzwnbjgcpycneryg("wc_swap");
  if (gccwygnbjikjcbqxlcea && pnwxnirynzktfrtstlnb !== "true") {
    if (gccwygnbjikjcbqxlcea.indexOf("+..+") != -1)
      var wc_tracking = gccwygnbjikjcbqxlcea.split("+..+");
    else var wc_tracking = gccwygnbjikjcbqxlcea.split("|");
    var loop_count = wc_tracking.length / 3;
    var wc_tn = [];
    var kvpairs = [];
    for (var i = 0; i < loop_count; i++) {
      wc_tn.push(wc_tracking[i * 3] + "::");
    }
    if (0 < wc_tn.length) {
      var wc_tn_data = wc_tn.join("+..+");
      kvpairs.push(
        encodeURIComponent("wc_tn") + "=" + encodeURIComponent(wc_tn_data)
      );
      kvpairs.push(
        encodeURIComponent("wc_profile_id") + "=" + encodeURIComponent("121371")
      );
      kvpairs.push(
        encodeURIComponent("wc_client_current") +
          "=" +
          encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
      );
      kvpairs.push(
        encodeURIComponent("wc_current_url") +
          "=" +
          encodeURIComponent($wc_leads.doc.url)
      );
    }
    var data = kvpairs.join("&");
    if (data) {
      function update_number(data, run_count) {
        var request = new XMLHttpRequest();
        request.open("POST", "//p.ksrndkehqnwntyxlhgto.com/keyword/", true);
        request.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8"
        );
        request.send(data);
        if (run_count >= 2) clearInterval(run_update);
      }
      var run_count = 0;
      update_number(data, run_count);
      var run_update = setInterval(function () {
        update_number(data, run_count++);
      }, 60000);
    }
  }
}
function oqhaqzwnbjgcpycneryg(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function nbfpiriuvmssvizfywxh(on, nn, dd) {
  var dr = "";
  var wc_temp = "";
  function replace_number(node, regex, replaceWith) {
    if (node.nodeType === 3) {
      if (node.length > 4 && /\d/.test(node.nodeValue)) {
        if (dd) wc_temp = node.nodeValue;
        node.nodeValue = node.nodeValue.replace(regex, replaceWith);
        if (dd && wc_temp != node.nodeValue) dr = on;
      }
    } else if (node.nodeType === 1) {
      if (node.classList) {
        if (!node.classList.contains("no-swap")) {
          for (
            var k = 0, numNodes = node.childNodes.length;
            k < numNodes;
            ++k
          ) {
            replace_number(node.childNodes[k], regex, replaceWith);
          }
        }
      } else {
        for (var k = 0, numNodes = node.childNodes.length; k < numNodes; ++k) {
          replace_number(node.childNodes[k], regex, replaceWith);
        }
      }
      if (
        node.attributes &&
        node.attributes.length &&
        node.attributes.length > 0
      ) {
        if (node.attributes.getNamedItem("href")) {
          if (dd) wc_temp = node.attributes.getNamedItem("href").value;
          node.attributes.getNamedItem("href").value = node.attributes
            .getNamedItem("href")
            .value.replace(regex, replaceWith);
          if (dd && wc_temp != node.attributes.getNamedItem("href").value)
            dr = on;
        }
        if (node.attributes.getNamedItem("title")) {
          if (dd) wc_temp = node.attributes.getNamedItem("title").value;
          node.attributes.getNamedItem("title").value = node.attributes
            .getNamedItem("title")
            .value.replace(regex, replaceWith);
          if (dd && wc_temp != node.attributes.getNamedItem("title").value)
            dr = on;
        }
        if (node.attributes.getNamedItem("data-actions")) {
          if (dd) wc_temp = node.attributes.getNamedItem("data-actions").value;
          node.attributes.getNamedItem("data-actions").value = node.attributes
            .getNamedItem("data-actions")
            .value.replace(regex, replaceWith);
          if (
            dd &&
            wc_temp != node.attributes.getNamedItem("data-actions").value
          )
            dr = on;
        }
        if (node.attributes.getNamedItem("data-action")) {
          if (dd) wc_temp = node.attributes.getNamedItem("data-action").value;
          node.attributes.getNamedItem("data-action").value = node.attributes
            .getNamedItem("data-action")
            .value.replace(regex, replaceWith);
          if (
            dd &&
            wc_temp != node.attributes.getNamedItem("data-action").value
          )
            dr = on;
        }
        if (node.attributes.getNamedItem("data-value")) {
          if (dd) wc_temp = node.attributes.getNamedItem("data-value").value;
          node.attributes.getNamedItem("data-value").value = node.attributes
            .getNamedItem("data-value")
            .value.replace(regex, replaceWith);
          if (dd && wc_temp != node.attributes.getNamedItem("data-value").value)
            dr = on;
        }
        if (node.attributes.getNamedItem("data-text")) {
          if (dd) wc_temp = node.attributes.getNamedItem("data-text").value;
          node.attributes.getNamedItem("data-text").value = node.attributes
            .getNamedItem("data-text")
            .value.replace(regex, replaceWith);
          if (dd && wc_temp != node.attributes.getNamedItem("data-text").value)
            dr = on;
        }
      }
    }
  }
  on_split = on.split(",");
  for (const sn of on_split) {
    sn_length = sn.length;
    nn_length = nn.length;
    sn_exp = "";
    for (var i = 0; i < sn_length; i++) {
      if (sn.substring(i, i + 1) === "(") sn_exp += "\\(";
      else if (sn.substring(i, i + 1) === ")") sn_exp += "\\)";
      else sn_exp += sn.substring(i, i + 1);
      if (i === 0) {
        sn_exp += "()()";
      }
      if (i !== sn_length - 1) {
        sn_exp += "([-â€“â€‘. )(,/s\u00A0&nbsp;]*)";
      }
    }
    var re = new RegExp(sn_exp, "g");
    nn_exp = "";
    if (typeof wc_number_format !== "undefined" && wc_number_format) {
      var nns = 0;
      for (var i = 0; i < wc_number_format.length; i++) {
        if (wc_number_format.substring(i, i + 1) === "x") {
          nn_exp += nn.substring(nns, nns + 1);
          nns++;
        } else {
          nn_exp += wc_number_format.substring(i, i + 1);
        }
      }
    } else {
      for (var i = 0; i < nn_length; i++) {
        nn_exp += nn.substring(i, i + 1);
        if (i !== nn_length - 1 && i < sn_length - 1) nn_exp += "$" + (i + 3);
      }
    }
    if (dd) wc_temp = document.title;
    document.title = document.title.replace(re, nn_exp);
    if (dd && wc_temp != document.title) dr = on;
    replace_number(document.body, re, nn_exp);
  }
  return dr;
}
function khgahvydosnkcpvjwdip(response) {
  if (response) {
    var same_site = "SameSite=Lax;";
    if (typeof wc_frame_parent !== "undefined" && wc_frame_parent)
      same_site = "SameSite=None;Secure;";
    var i = 0;
    var root_domain;
    var parts = location.hostname.split(".");
    var test = "_gd" + new Date().getTime();
    while (
      i < parts.length - 1 &&
      document.cookie.indexOf(test + "=" + test) == -1
    ) {
      root_domain = parts.slice(-1 - ++i).join(".");
      document.cookie =
        test + "=" + test + ";domain=" + root_domain + ";" + same_site;
    }
    if (document.cookie.indexOf(test + "=" + test) == -1) {
      same_site = "SameSite=None;Secure;";
      while (
        i < parts.length - 1 &&
        document.cookie.indexOf(test + "=" + test) == -1
      ) {
        root_domain = parts.slice(-1 - ++i).join(".");
        document.cookie =
          test + "=" + test + ";domain=" + root_domain + ";" + same_site;
      }
    }
    var date = new Date();
    date.setSeconds(date.getSeconds() + 1);
    var expires = date.toGMTString();
    document.cookie =
      test +
      "=;expires=" +
      expires +
      ";domain=" +
      root_domain +
      ";" +
      same_site;
    var date = new Date();
    date.setTime(date.getTime() + 5 * 60 * 1000);
    var expires = date.toGMTString();
    var current_tracking_cookie = oqhaqzwnbjgcpycneryg("wc_swap");
    if (current_tracking_cookie && pnwxnirynzktfrtstlnb !== "true") {
      document.cookie =
        "wc_swap=" +
        current_tracking_cookie +
        "+..+" +
        response.slice(0, -4) +
        ";expires=" +
        expires +
        ";domain=." +
        root_domain +
        ";path=/;" +
        same_site;
    } else {
      document.cookie =
        "wc_swap=" +
        response.slice(0, -4) +
        ";expires=" +
        expires +
        ";domain=." +
        root_domain +
        ";path=/;" +
        same_site;
    }
  }
}
function bauwiruxzontakyuoxkw(name) {
  name = name.replace(/[\[]/, "[").replace(/[\]]/, "]");
  var search_string = "";
  if ($wc_leads.doc.search) search_string = $wc_leads.doc.search;
  else if ($wc_leads.doc.hash) search_string = $wc_leads.doc.hash;
  var regex = new RegExp("[?&]" + name + "=([^&#]*)"),
    results = regex.exec(search_string);
  if (results === null) {
    return "";
  } else {
    var decoded_parameter = decodeURIComponent(results[1]);
    while (
      decoded_parameter !==
      decodeURIComponent(
        decoded_parameter.replace(/%(?![0-9][0-9a-fA-F]+)/g, "%25")
      )
    )
      decoded_parameter = decodeURIComponent(
        decoded_parameter.replace(/%(?![0-9][0-9a-fA-F]+)/g, "%25")
      );
    return decoded_parameter;
  }
}
function efbdmcsgiiideurvasjn(name) {
  name = name.replace(/[\[]/, "[").replace(/[\]]/, "]");
  var regex = new RegExp("[?&]" + name + "=([^&#]*)"),
    results = regex.exec($wc_leads.doc.ref);
  return results === null ? "" : unescape(results[1].replace(/\+/g, " "));
}
function wc_transaction_ypbib(tid, tto, tax, tsh, data, id) {
  if (id && id !== 121371) return;
  if (
    oqhaqzwnbjgcpycneryg("wc_client") &&
    oqhaqzwnbjgcpycneryg("wc_client_current")
  ) {
    push_order(tid, tto, tax, tsh, data);
  } else {
    window.onload = function () {
      push_order(tid, tto, tax, tsh, data);
    };
  }
  function push_order(tid, tto, tax, tsh, custom_data) {
    var kvpairs = [];
    for (var i in custom_data) {
      kvpairs.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(custom_data[i])
      );
    }
    kvpairs.push(
      encodeURIComponent("wc_profile_id") + "=" + encodeURIComponent("121371")
    );
    kvpairs.push(
      encodeURIComponent("wc_client") +
        "=" +
        encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
    );
    kvpairs.push(
      encodeURIComponent("wc_client_current") +
        "=" +
        encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
    );
    kvpairs.push(
      encodeURIComponent("wc_page") +
        "=" +
        encodeURIComponent($wc_leads.doc.url)
    );
    kvpairs.push(
      encodeURIComponent("wc_transaction_id") + "=" + encodeURIComponent(tid)
    );
    kvpairs.push(
      encodeURIComponent("wc_transaction_total") + "=" + encodeURIComponent(tto)
    );
    kvpairs.push(
      encodeURIComponent("wc_transaction_tax") + "=" + encodeURIComponent(tax)
    );
    kvpairs.push(
      encodeURIComponent("wc_transaction_shipping") +
        "=" +
        encodeURIComponent(tsh)
    );
    var data = kvpairs.join("&");
    if (data) {
      if (navigator.sendBeacon && yrejzpicqjfxoquxuuaw) {
        navigator.sendBeacon(
          "//p.ksrndkehqnwntyxlhgto.com/lead/transaction",
          data
        );
      } else {
        var request = new XMLHttpRequest();
        request.open(
          "POST",
          "//p.ksrndkehqnwntyxlhgto.com/lead/transaction",
          true
        );
        request.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8"
        );
        request.send(data);
      }
    }
  }
}
function wc_event_ypbib(ec, ea, el, ev, data, id) {
  if (id && id !== 121371) return;
  if (
    oqhaqzwnbjgcpycneryg("wc_client") &&
    oqhaqzwnbjgcpycneryg("wc_client_current")
  ) {
    push_event(ec, ea, el, ev, data);
  } else {
    window.onload = function () {
      push_event(ec, ea, el, ev, data);
    };
  }
  function push_event(ec, ea, el, ev, custom_data) {
    var kvpairs = [];
    for (var i in custom_data) {
      kvpairs.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(custom_data[i])
      );
    }
    kvpairs.push(
      encodeURIComponent("wc_profile_id") + "=" + encodeURIComponent("121371")
    );
    kvpairs.push(
      encodeURIComponent("wc_client") +
        "=" +
        encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
    );
    kvpairs.push(
      encodeURIComponent("wc_client_current") +
        "=" +
        encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
    );
    kvpairs.push(
      encodeURIComponent("wc_page") +
        "=" +
        encodeURIComponent($wc_leads.doc.url)
    );
    kvpairs.push(
      encodeURIComponent("wc_category") + "=" + encodeURIComponent(ec)
    );
    kvpairs.push(
      encodeURIComponent("wc_action") + "=" + encodeURIComponent(ea)
    );
    kvpairs.push(encodeURIComponent("wc_label") + "=" + encodeURIComponent(el));
    kvpairs.push(encodeURIComponent("wc_value") + "=" + encodeURIComponent(ev));
    var data = kvpairs.join("&");
    if (data) {
      if (navigator.sendBeacon && yrejzpicqjfxoquxuuaw) {
        navigator.sendBeacon("//p.ksrndkehqnwntyxlhgto.com/lead/event", data);
      } else {
        var request = new XMLHttpRequest();
        request.open("POST", "//p.ksrndkehqnwntyxlhgto.com/lead/event", true);
        request.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8"
        );
        request.send(data);
      }
    }
  }
}
function wc_chat_ypbib(ec, ea, data, id) {
  if (id && id !== 121371) return;
  if (
    oqhaqzwnbjgcpycneryg("wc_client") &&
    oqhaqzwnbjgcpycneryg("wc_client_current")
  ) {
    push_event(ec, ea, data, id);
  } else {
    window.onload = function () {
      push_event(ec, ea, data, id);
    };
  }
  function push_event(ec, ea, custom_data) {
    var kvpairs = [];
    for (var i in custom_data) {
      kvpairs.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(custom_data[i])
      );
    }
    kvpairs.push(
      encodeURIComponent("wc_profile_id") + "=" + encodeURIComponent("121371")
    );
    kvpairs.push(
      encodeURIComponent("wc_client") +
        "=" +
        encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
    );
    kvpairs.push(
      encodeURIComponent("wc_client_current") +
        "=" +
        encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
    );
    kvpairs.push(
      encodeURIComponent("wc_page") +
        "=" +
        encodeURIComponent($wc_leads.doc.url)
    );
    kvpairs.push(
      encodeURIComponent("wc_category") + "=" + encodeURIComponent(ec)
    );
    kvpairs.push(
      encodeURIComponent("wc_action") + "=" + encodeURIComponent(ea)
    );
    var data = kvpairs.join("&");
    if (data) {
      if (navigator.sendBeacon && yrejzpicqjfxoquxuuaw) {
        navigator.sendBeacon("//p.ksrndkehqnwntyxlhgto.com/lead/chat", data);
      } else {
        var request = new XMLHttpRequest();
        request.open("POST", "//p.ksrndkehqnwntyxlhgto.com/lead/chat", true);
        request.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8"
        );
        request.send(data);
      }
    }
  }
}
function wc_form_ypbib(id, f_data) {
  if (
    oqhaqzwnbjgcpycneryg("wc_client") &&
    oqhaqzwnbjgcpycneryg("wc_client_current")
  ) {
    push_event(id, f_data);
  } else {
    window.onload = function () {
      push_event(id, f_data);
    };
  }
  function push_event(id, f_data) {
    var kvpairs = [];
    for (var i in f_data) {
      kvpairs.push(encodeURIComponent(i) + "=" + encodeURIComponent(f_data[i]));
    }
    if (0 < kvpairs.length) {
      kvpairs.push(
        encodeURIComponent("wc_profile_id") + "=" + encodeURIComponent("121371")
      );
      kvpairs.push(
        encodeURIComponent("wc_form_set_id") + "=" + encodeURIComponent(id)
      );
      kvpairs.push(
        encodeURIComponent("wc_client") +
          "=" +
          encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
      );
      kvpairs.push(
        encodeURIComponent("wc_client_current") +
          "=" +
          encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
      );
      kvpairs.push(
        encodeURIComponent("wc_page") +
          "=" +
          encodeURIComponent($wc_leads.doc.url)
      );
    }
    var data = kvpairs.join("&");
    if (data) {
      if (navigator.sendBeacon && yrejzpicqjfxoquxuuaw) {
        navigator.sendBeacon("//p.ksrndkehqnwntyxlhgto.com/lead/form", data);
      } else {
        var request = new XMLHttpRequest();
        request.open("POST", "//p.ksrndkehqnwntyxlhgto.com/lead/form", true);
        request.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded; charset=UTF-8"
        );
        request.send(data);
      }
    }
  }
}
function wc_iframe_ypbib(url, id) {
  var final_url = url;
  var source = "",
    medium = "",
    campaign = "",
    content = "",
    keyword = "",
    gclid = "",
    msclkid = "",
    //fbc = "",
    //fbp = "",
    fbclid = "";
  cookie = oqhaqzwnbjgcpycneryg("wc_client");
  if (cookie) {
    var cookie_parts = cookie.split("+..+");
    if (cookie_parts[0]) source = "utm_source=" + cookie_parts[0];
    if (cookie_parts[1]) medium = "utm_medium=" + cookie_parts[1];
    if (cookie_parts[2]) campaign = "utm_campaign=" + cookie_parts[2];
    if (cookie_parts[3]) content = "utm_content=" + cookie_parts[3];
    if (cookie_parts[4]) keyword = "utm_term=" + cookie_parts[4];
    if (cookie_parts[5]) gclid = "gclid=" + cookie_parts[5];
    if (cookie_parts[8]) msclkid = "msclkid=" + cookie_parts[8];
    if (cookie_parts[9]) fbclid = "fbclid=" + cookie_parts[9];
    //if (cookie_parts[10]) fbc = "_fbc=" + cookie_parts[10];
    //if (cookie_parts[11]) fbp = "_fbp=" + cookie_parts[11];
    if (source) {
      if (final_url.indexOf("?") > -1) final_url += "&";
      else final_url += "?";
      final_url += source;
    }
    if (medium) {
      if (final_url.indexOf("?") > -1) final_url += "&";
      else final_url += "?";
      final_url += medium;
    }
    if (campaign) {
      if (final_url.indexOf("?") > -1) final_url += "&";
      else final_url += "?";
      final_url += campaign;
    }
    if (content) {
      if (final_url.indexOf("?") > -1) final_url += "&";
      else final_url += "?";
      final_url += content;
    }
    if (keyword) {
      if (final_url.indexOf("?") > -1) final_url += "&";
      else final_url += "?";
      final_url += keyword;
    }
    if (gclid) {
      if (final_url.indexOf("?") > -1) final_url += "&";
      else final_url += "?";
      final_url += gclid;
    }
    if (msclkid) {
      if (final_url.indexOf("?") > -1) final_url += "&";
      else final_url += "?";
      final_url += msclkid;
    }
    if (fbclid) {
      if (final_url.indexOf("?") > -1) final_url += "&";
      else final_url += "?";
      final_url += fbclid;
    }
    // if (fbc) {
    //   if (final_url.indexOf("?") > -1) final_url += "&";
    //   else final_url += "?";
    //   final_url += fbc;
    // }
    // if (fbp) {
    //   if (final_url.indexOf("?") > -1) final_url += "&";
    //   else final_url += "?";
    //   final_url += fbp;
    // }
  }
  document.getElementById(id).src = final_url;
}
$wc_leads.tracking = $wc_leads.tracking || {
  appointment: function (l_data) {
    if (
      oqhaqzwnbjgcpycneryg("wc_client") &&
      oqhaqzwnbjgcpycneryg("wc_client_current")
    ) {
      push_event(l_data);
    } else {
      window.onload = function () {
        push_event(l_data);
      };
    }
    function push_event(l_data) {
      var kvpairs = [];
      for (var i in l_data) {
        kvpairs.push(
          encodeURIComponent(i) + "=" + encodeURIComponent(l_data[i])
        );
      }
      if (0 < kvpairs.length) {
        kvpairs.push(
          encodeURIComponent("wc_profile_id") +
            "=" +
            encodeURIComponent("121371")
        );
        kvpairs.push(
          encodeURIComponent("wc_client") +
            "=" +
            encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
        );
        kvpairs.push(
          encodeURIComponent("wc_client_current") +
            "=" +
            encodeURIComponent(oqhaqzwnbjgcpycneryg("wc_client"))
        );
        kvpairs.push(
          encodeURIComponent("wc_page") +
            "=" +
            encodeURIComponent($wc_leads.doc.url)
        );
      }
      var data = kvpairs.join("&");
      if (data) {
        if (navigator.sendBeacon && yrejzpicqjfxoquxuuaw) {
          navigator.sendBeacon(
            "//p.ksrndkehqnwntyxlhgto.com/lead/appointment",
            data
          );
        } else {
          var request = new XMLHttpRequest();
          request.open(
            "POST",
            "//p.ksrndkehqnwntyxlhgto.com/lead/appointment",
            true
          );
          request.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded; charset=UTF-8"
          );
          request.send(data);
        }
      }
    }
  },

};
