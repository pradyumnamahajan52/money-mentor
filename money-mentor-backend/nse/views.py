from django.shortcuts import render
from rest_framework import status
from django.http import JsonResponse
from .urls_list import Normal_MARKET_STATUS_URL,INDICES_WATCH_URL
from .utils import headers,requestOpener
from urllib.request import  Request
from urllib.error import HTTPError
import json


def getMarketStatus(request):
    try:
        req = Request(Normal_MARKET_STATUS_URL, None, headers)
        res_open = requestOpener().open(req)
        res_read = res_open.read()
        res_dict = json.loads(res_read)
        return JsonResponse(res_dict)
    except HTTPError as err:
        return JsonResponse({"status":err.code,"error":err.reason})
    except Exception as err:
        return JsonResponse({"status":status.HTTP_400_BAD_REQUEST,"error":str(err)})

def getIndicesWatch(request):
    try:
        req = Request(INDICES_WATCH_URL, None, headers)
        res_open = requestOpener().open(req)
        res_read = res_open.read()
        res_dict = json.loads(res_read)
        return JsonResponse(res_dict)
    except HTTPError as err:
        return JsonResponse({"status":err.code,"error":err.reason})
    except Exception as err:
        return JsonResponse({"status":status.HTTP_400_BAD_REQUEST,"error":str(err)})

