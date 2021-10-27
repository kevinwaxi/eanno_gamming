export default class Auth {
    constructor(user) {
        this.user = user;
    }

    roles() {
        return this.user.roles.map((role) => role.name);
    }

    permissions() {
        return this.user.permissions.map((permission) => permission.name);
    }

    isAdmin() {
        return this.roles().includes("Admin");
    }
    isWorker() {
        return this.roles().includes("Worker");
    }
    isContact() {
        return this.roles().includes("Contact");
    }
    isModerator() {
        return this.roles().includes("Moderator");
    }

    can($permissionName) {
        return this.permissions().includes($permissionName);
    }
}
