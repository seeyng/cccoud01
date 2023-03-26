#!/bin/sh
UUID=${UUID:-'2de96717-2945-49ee-92b3-848a88dec64b'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
