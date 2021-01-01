function change() {
//    // Clear Attributes
//    const elements = document.getElementsByTagName('a');
//    for (const i = 0; i < elements.length; i++) {
//        elements[i].style.background = 'black';
//        elements[i].removeAttribute("href");
//    }

    const searchId = document.getElementById("search");
    const searchValue = searchId.value.trim();

    // Clipboard
    searchId.select();
    document.execCommand('copy');

    // Description
    // document.getElementById("description").style.display = "block";

    var idUrl = {};
    idUrl["douban"] = "https://book.douban.com/subject_search?search_text=";
    idUrl["goodreads"] = "https://www.goodreads.com/search?query=";
    idUrl["dangdang"] = "http://search.dangdang.com/?ddsale=1&key=";
    idUrl["amazon"] = "https://www.amazon.com/s?i=stripbooks-intl-ship&k=";
    idUrl["superlib"] = "http://book.ucdrs.superlib.net/search?allsw=&bCon=&ecode=utf-8&channel=search&Field=1&sw=";
    idUrl["google"] = "https://www.google.com/search?q=";
    idUrl["yandex"] = "https://yandex.com/search/?text=";
    idUrl["baidu"] = "https://www.baidu.com/s?wd=";
    idUrl["libgen"] = "http://gen.lib.rus.ec/search.php?req=";
    idUrl["zlibrary"] = "https://b-ok.cc/s/?q=";
    idUrl["itpanda"] = "https://www.itpanda.net/book/search?query=";
    idUrl["pdfbook"] = "http://www.pdfbook.cn/?s=";
    idUrl["shuge"] = "https://new.shuge.org/?s=";
    idUrl["zhishikoo"] = "https://book.zhishikoo.com/?s=";
    idUrl["aibooks"] = "https://www.aibooks.cc/search/";
    idUrl["sxpdf"] = "https://www.sxpdf.com/?s=";
    idUrl["idata"] = "https://bks.thefuture.top/result.php?q=";
    idUrl["wikipediazh"] = "https://zh.wikipedia.org/w/index.php?search=";
    idUrl["wikipedia"] = "https://en.wikipedia.org/w/index.php?search=";
    idUrl["thefuture"] = "https://bks.thefuture.top/result.php?q=";
    idUrl["zdict"] = "https://www.zdic.net/hans/";
    idUrl["ctext"] = "https://ctext.org/searchbooks.pl?if=gb&remap=gb&searchu=";

    for (x in idUrl)
    {
        let id = document.getElementById(x);
        id.style.background="lightcyan";
        id.href = idUrl[x] + searchValue;
    }

    // Info
    idUrl["jd"] = "https://search.jd.com/Search?keyword=";
    const jd = document.getElementById("jd");
    jd.style.background="lightcyan";
    jd.href = idUrl["jd"] + "\"" + searchValue + "\"";

    // Download directly

    // Online drive
    idUrl["dalipan"] = "https://www.dalipan.com/search?keyword=";
    const dalipan = document.getElementById("dalipan");
    dalipan.style.background="lightcyan";
    dalipan.href = idUrl["dalipan"] + encodeURIComponent(searchValue);

    idUrl["toplinks"] = "http://www.toplinks.cc/s/?keyword=";
    const toplinks = document.getElementById("toplinks");
    toplinks.style.background="lightcyan";
    toplinks.href = idUrl["toplinks"] + encodeURIComponent(searchValue);

    // Download limited
    idUrl["epubee"] = "http://cn.epubee.com/books/?s=";
    const epubee = document.getElementById("epubee");
    epubee.style.background="lightcyan";
    const epubeeValue = btoa(encodeURIComponent(searchValue.slice(-1)) + searchValue.length + encodeURIComponent("$" + searchValue.slice(0, searchValue.length - 1) + "#"));
    epubee.href = idUrl["epubee"] + epubeeValue;

    // ALTERNATIVE
    // Article
    // Word
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
