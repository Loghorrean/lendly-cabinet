import { BearerToken } from "@/src/entities/auth/model";
import { ApiBearerToken } from "@/src/entities/auth/model";
import dayjs from "dayjs";

export class BearerTokenConverter {
    static apiToClient(token: ApiBearerToken): BearerToken {
        const clientToken = new BearerToken(
            token.accessToken,
            dayjs(token.accessTokenExpiredAt).toDate(),
            token.refreshToken,
            dayjs(token.refreshTokenExpiredAt).toDate()
        );
        clientToken.accessTokenExpiredAt.toJSON = clientToken.refreshTokenExpiredAt.toJSON = function () {
            return dayjs(this).format();
        };
        return clientToken;
    }

    static clientToApi(token: BearerToken): ApiBearerToken {
        return {
            accessToken: token.accessToken,
            accessTokenExpiredAt: token.accessTokenExpiredAt.toString(),
            refreshToken: token.refreshToken,
            refreshTokenExpiredAt: token.refreshTokenExpiredAt.toString(),
        };
    }
}
