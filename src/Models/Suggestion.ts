interface Package {
    name: string;
    description: string;
    version: string;
    date: string;
}

export interface Suggestion {
    highlight: string;
    package: Package;
}