export interface Package {
    name: string;
    description: string;
    version: string;
}

export interface Suggestion {
    highlight: string;
    package: Package;
}