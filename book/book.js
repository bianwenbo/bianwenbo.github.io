function change() {
//    // Clear Attributes
//    const elements = document.getElementsByTagName('a');
//    for (const i = 0; i < elements.length; i++) {
//        elements[i].style.color = 'black';
//        elements[i].removeAttribute("href");
//    }

    const searchId = document.getElementById("search");
    const searchValue = searchId.value.trim();

    // Clipboard
    searchId.select();
    document.execCommand('copy');

    // Description
    // document.getElementById("description").style.display = "block";

    // Info
    const douban = document.getElementById("douban");
    douban.style.color="green";
    douban.href = "https://book.douban.com/subject_search?search_text=" + searchValue;

    const goodreads = document.getElementById("goodreads");
    goodreads.style.color="green";
    goodreads.href = "https://www.goodreads.com/search?query=" + searchValue;

    const dangdang = document.getElementById("dangdang");
    dangdang.style.color="green";
    dangdang.href = "http://search.dangdang.com/?ddsale=1&key=" + searchValue;

    const jd = document.getElementById("jd");
    jd.style.color="green";
    jd.href = "https://search.jd.com/Search?keyword=" + "\"" + searchValue + "\"";

    const amazon = document.getElementById("amazon");
    amazon.style.color="green";
    amazon.href = "https://www.amazon.com/s?i=stripbooks-intl-ship&k=" + searchValue;

    const superlib = document.getElementById("superlib");
    superlib.style.color="green";
    superlib.href = "http://book.ucdrs.superlib.net/search?allsw=&bCon=&ecode=utf-8&channel=search&Field=1&sw=" + searchValue;

    const google = document.getElementById("google");
    google.style.color="green";
    google.href = "https://www.google.com/search?q=" + searchValue;

    const yandex = document.getElementById("yandex");
    yandex.style.color="green";
    yandex.href = "https://yandex.com/search/?text=" + searchValue;

    const baidu = document.getElementById("baidu");
    baidu.style.color="green";
    baidu.href = "https://www.baidu.com/s?wd=" + searchValue;

    // Download directly
    const libgen = document.getElementById("libgen");
    libgen.style.color="green";
    libgen.href = "https://libgen.is/search.php?req=" + searchValue;

    const zlibrary = document.getElementById("zlibrary");
    zlibrary.style.color="green";
    zlibrary.href = "https://b-ok.cc/s/?q=" + searchValue;

    const itpanda = document.getElementById("itpanda");
    itpanda.style.color="green";
    itpanda.href = "https://www.itpanda.net/book/search?query=" + searchValue;

    // Online drive
    const qzhou = document.getElementById("qzhou");
    qzhou.style.color="green";
    qzhou.href = "https://www.qzhou.com.cn/search?keyword=" + encodeURIComponent(searchValue);

    const dashengpan = document.getElementById("dashengpan");
    dashengpan.style.color="green";
    dashengpan.href = "https://www.dashengpan.com/search?keyword=" + encodeURIComponent(searchValue);

    // Download limited
    const epubee = document.getElementById("epubee");
    epubee.style.color="green";
    const epubeeValue = btoa(encodeURIComponent(searchValue.slice(-1)) + searchValue.length + encodeURIComponent("$" + searchValue.slice(0, searchValue.length - 1) + "#"));
    epubee.href = "http://cn.epubee.com/books/?s=" + epubeeValue;

    // ALTERNATIVE
    const thefuture = document.getElementById("thefuture");
    thefuture.style.color="green";
    thefuture.href = "https://bks.thefuture.top/result.php?q=" + searchValue;

}

function gbkEncode(str) {
  return str.replace(/./g, function (a) {
    var code = a.charCodeAt(0);
    if (isAscii(code)) {
      return encodeURIComponent(a);
    } else {
      var key = code.toString(16);
      if (key.length != 4)key = ('000' + key).match(/....$/)[0];
      return U2Ghash[key] || a;
    }
  });
}

function gbkDecode(str, callback) {
  return str.replace(/%[0-9A-F]{2}%[0-9A-F]{2}/g, function (a) {
    if (a in G2Uhash) {
      return String.fromCharCode('0x' + G2Uhash[a]);
    } else {
      return a;
    }
  }).replace(/%[\w]{2}/g, function (a) {

    return decodeURIComponent(a);

  });
}
