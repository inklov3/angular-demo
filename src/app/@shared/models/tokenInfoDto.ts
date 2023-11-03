export interface TokenInfoDto {
    tokenName: string;
    tokenValue: string;
    isLogin: boolean;
    loginId: string;
    loginType: string;
    tokenTimeout: number;
    sessionTimeout: number;
    tokenSessionTimeout: number;
    tokenActivityTimeout: number;
    loginDevice: string;
    tag: null | string;
    name: string;
    role: string;
    id: string;
}