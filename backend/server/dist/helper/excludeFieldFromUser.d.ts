export declare function excludeFieldFromUser<User, Key extends keyof User>(user: User, ...keys: Key[]): Omit<User, Key>;
