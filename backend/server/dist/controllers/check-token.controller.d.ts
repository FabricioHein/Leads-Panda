import { CheckTokenService } from '../service/check-token.service';
export declare class CheckTokenController {
    private readonly checkTokenService;
    constructor(checkTokenService: CheckTokenService);
    findAll(): {
        token: boolean;
    };
}
