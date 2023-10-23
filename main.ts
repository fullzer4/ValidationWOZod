class User {
    constructor(public email: string, public name: string, public age: number) {
        this.validateEmail();
        this.validateName();
        this.validateAge();
    }

    private validateEmail(): void {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
            throw new Error('Invalid email format');
        }
    }

    private validateName(): void {
        if (this.name.length < 3) {
            throw new Error('Name must have at least 3 characters');
        }
    }

    private validateAge(): void {
        if (this.age < 18) {
            throw new Error('User must be at least 18 years old');
        }
    }
}

try {
    const user = new User('user@example.com', 'John Doe', 25);
    console.log('User is valid');
} catch (error: any) {
    console.error(error.message);
}