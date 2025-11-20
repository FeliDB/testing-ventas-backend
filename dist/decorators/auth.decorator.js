"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = Auth;
const common_1 = require("@nestjs/common");
const remote_auth_guard_1 = require("../guards/remote-auth.guard");
const user_role_guard_1 = require("../guards/user-role.guard");
function Auth(...roles) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)('roles', roles), (0, common_1.UseGuards)(remote_auth_guard_1.RemoteAuthGuard, user_role_guard_1.UserRoleGuard));
}
//# sourceMappingURL=auth.decorator.js.map