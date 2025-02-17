import type { ImageMetadata } from 'astro';
import homeImg from '../../assets/_ui/icon/common/main.png';
import weaponsImg from '../../assets/_ui/icon/common/enhance.png';
import gearImg from '../../assets/_ui/icon/common/wear_battle.png';
import materiaImg from '../../assets/_ui/icon/common/materia.png';

interface Route {
  title: string;
  path: string;
  imgPath: string;
  imgMetadata: ImageMetadata;
  img32x32base64: string;
}

export const home: Route = {
  title: 'Home',
  path: '/',
  imgPath: '/src/assets/_ui/icon/common/main.png',
  imgMetadata: homeImg,
  img32x32base64: 'UklGRioCAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSM4BAAABkHNt2yHJC3re76te27Zt27aN bMK1zcwbWZFtb2Tbu5HtrvreJ+mqmo6ICUBaDbKWSotFjtk10iAeSt+cgkwWA2PR4/dBmMwxksgB bylfFYfEMwYW2QbmKnGW7AOL2BbGQ/btHVu/J9fAIq54KNUZJW9tmMSAt/NA4liLdreqN3j38zyd +98aFtHFItsSTuubpE/ncw48RDTWS1g0vsEH66hKF/CsFQkTCwgSc//R/Q5USeXnGjCIWqRHxuzL dI50JOk4ER5CBeX3fCNJp0wdcFPW/JAQg/KXGLikY6jj9eYrc4YZAbCRjuHKXwtfjYJFShGBRd4n dFHe/DkBQWifwbAJzGQyjMqgGUxIlnfLkbDoRGpYwO0wCB3J1bAGdX/cD1P+axBlFw8BBjWaz6Gf KuB2GISv4xULEeR5Rkeqo1JbRhrKRRBJYDkd6Ugqv+eFRCgzV2A9jKGSypcPqHyTI5LAeoKMQJWO R2xr53gakWAMyu6mU1L5cOVTJrkIHiIKSq76RqcMVSYbwEQxqO0zydTqq8+dMIhssIWB0xSkz7fl INEEpR/+89WRzvnKD81hEFNQMNeof1SS1KOVYBFbxGDq289fHpxe2kTEICZWUDggNgAAAPACAJ0B KiAAIAA+bSySRaQioZgEAEAGxLSAAErzm8CAAP7xjH/+QV//j+T//x6TyP//xDoAAA=='
};

export const routes: Record<string, Route> = {
  "Weapons": {
    title: 'Weapons',
    path: '/weapons',
    imgPath: '/src/assets/_ui/icon/common/enhance.png',
    imgMetadata: weaponsImg,
    img32x32base64: 'UklGRoICAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSCoCAAABoGjbtiHJWueetm3btm3btm3z 2bZt27Zt234RsR8yIn8hIiaAfD2Q2yi7qjL5G3jI4azWiXgeRulDjQluEKj3/o6GhDycVfp2R3FC wDldG3GyG7U+V6w3x0JBeuidClgegTM044Bi3d4Tu08zcLIHBiluu0B/64NjNu3T3cHI01mv5M+/ pQfvu27ZjRpKwZAHRrv7lcRq3U1f71924ljDQ7bAhFYTP5GefkGRXtm+99g2BM9iNLitLOWO/E1x pFGddcvyo7dWImvgzHEUMprdGp35+llrY0WXrz1lYobAsAsIBIexF2w642fpqhPfOWJyBgpc14oA FKtDxa3HrblCc0rpswppzpoDOBRgn3pSatS+w5sf+lXLSTVq3lIGA2fs3fXZ/+PKicdtP+m2ImnO iTNxgDIFjUbfSU9MWHFKeSxXoPcVGATa6zBcor//0iFqFCXVuKorAYwGT8xlqJJYr5fBLMVZdAwO YBiFnlAcazpu5DYq3l4VA6PcwYasURzpDox058jlOOBs0Bd7PlSsvzoT0gIdrjOAQL2vlChRpBNw 0o3LBxJynKsoiZJEH1fD0pxpp+GA0ztJJCnWUpxUo+St9TCA8KAiSbEeKYClOfs24YCzSLEkJUk/ nFSj2U2FAYzKHyiRFOlcAumBC8figHOsIkmJvqqXibEXEoBA+9+VSIq0ESdjoWubYvz/FkWSYj1X FMuy9Mdb7r7rrrvuuuOhSP9PNAonK1ZQOCAyAAAA8AIAnQEqIAAgAD5tMpZHpCKiISgIAIANiWkA AEsm0AAA/vGMf/44f/+P5P//HpA3AAA='
  },
  "Gear": {
    title: 'Gear',
    path: '/gear',
    imgPath: '/src/assets/_ui/icon/common/wear_battle.png',
    imgMetadata: gearImg,
    img32x32base64: 'UklGRngCAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSCkCAAABoLVtmyFJ1v5GRGFs27Zt27Zt 2/Yc2Tqzbdu2Z9asrIx4D1IRMQEAlARCCnMbQgKAQNbNCRASEEoAUBLhssmAhF86QLnl/Ks0RLhs cgglAFH/HF+vyKZ+2QbpUBjGotGJd/isZxQiXOs0yTjXYh2bI6JUGAX+v49etGn4uHOiHjRa0+Yb NObrTBACOMKp2MMYtdZcHT7KOJ011QdeWrl2zer91CWT/0pD2nyVAxmfUZMxLsNKapLUvIjOjJOG /1aFQsW/aeJ8XARyJnXMsrg7BdIcpG00+0IhhB60eCEdJldGy5809nhknZ0eG2hxJUIAQljE3Yki O/h7F+S987Meyj/n9WyYzmMhIQAIJO8TTn2aluEypM6Jvv/Q4uvS6JwXEk6hkO8B4zQ2T2dUa6k1 bf7aAErADQkfME6SNp9eojYkbf6eDz6S/UHjoCY1XTXrQXll+MuDRtPdsLGfJM+p3bwN/y8O6QaF 0YzZAWPcAQlPgTTvaOjbUFfwA4E6YwYO9j1oREcJ30IguAiA/PcfP/L54HVLqCDiCjU9DX/LDOEP IQynpT1j3AqJgArLadPT5jlA+BNI85HGizRVIP0ptKO2vbTF+Qj5A8Tg32jcDK2FSSACjKyHbPto HIZXyiD/zGQQXhL5f+fqpChft1bt2rXrVI9g1F9sDeUFgcKH+KmFjEYikUhUlrnBe7UUgjZ7w3/c /+bvw8MQAaRColkWDUnDzekgFdwBAFZQOCAoAAAA0AIAnQEqIAAgAD5tMpVHpCMiISgIAIANiWkA AD2joAD++w6BqpEAAA=='
  },
  "Materia": {
    title: 'Materia',
    path: '/materia',
    imgPath: '/src/assets/_ui/icon/common/materia.png',
    imgMetadata: materiaImg,
    img32x32base64: 'UklGRsACAABXRUJQVlA4WAoAAAAQAAAAHwAAHwAAQUxQSGICAAABoCzZtmnbamOMtX1t27Zt23iq GUXbtt8r2bZt27aNffbqhY13PiEiJoDa4dBq2eGXPvbUlcdv7Q4WNGwBc2/5T/r++Wc/kfTEtgxh DVjCyHv04QlLOzhYacph7+n9ZbjVsWCvv/Tt6VMwavvyN3RBHq9hztmqNKWpbijgZhaJkRypR9rh Vc45uv0vpeWyDieotiRYpydaYhDsqQP3VpNU0WsJVgWWYZWuxHFG6xaO1X9Sqs9L9bAM+2sPwrj3 555s03+V9F9dj1HfnAd+6gTztD8R96mS6rdJeAM4E3U4XPNzS5x2p37+y11TcBp27vgm27p8PoE5 hVaGUTcCCDZrwTItJ8ADPKjr4GC000mHqQMGYEZ9Z8kWDIMXn7jku6jVqLPyT+2O41z9xSPP0xy7 SQfgJJyop55tBhJ27oW5JRynqz5uhqB3Fnez4NKfjleL/xUs/vMgEvoNgsdf2qJpeGPOyj+lI5j+ ZHcKf1zUS4eTNBQsStNKWrn+r0NgjrbxyLuONWK0fV6V9B/dTMJF/7Rjh9YQYNUeSYbZ36qprAda Q4+mSyD77utZM+oa7T9TOdUVJTJcoGEEq3Q0GZLuvTu0GzB35xkvK9VnO/AsS3QigXO+1pFh9uWf /FmRpF8f2qsNkWXwTy8WMYz8w1pJQId52w7YZ+2sDmCZDAM//n4IDjjtntABWBi1PZcYC378YQJB tVO6Ug+PxohcPp81jM4X6uVBBLXd2f1H3bm+FTVzMy79RycVCepb0P7Qb/TfS1eecNwlj/+qvy8f iDuNWhjZ+ac88bX088sXb24DYdQEVlA4IDgAAAAwAwCdASogACAAPm0ylUekIqIhKAgAgA2JaQAA PZaGvpAAAP77DpvSEhVWK+4qlnfnf74QgA3AAA=='
  }
};
