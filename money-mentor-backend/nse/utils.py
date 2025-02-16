from urllib.request import build_opener, HTTPCookieProcessor, Request
from http.cookiejar import CookieJar

headers = {'Accept': '*/*', 'Accept-Language': 'en-US,en;q=0.5', 'Host': 'www1.nseindia.com',
                          'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0', 'X-Requested-With': 'XMLHttpRequest'}

def requestOpener():
    return build_opener(HTTPCookieProcessor(CookieJar()))