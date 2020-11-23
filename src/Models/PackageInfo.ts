export interface Author {
    name: string;
    email: string;
    url: string;
    username: string;
}

export interface Publisher {
    username: string;
    email: string;
}

export interface Maintainer {
    username: string;
    email: string;
}

export interface Contributor {
    name: string;
    email: string;
}

export interface Repository {
    type: string;
    url: string;
}

export interface Links {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
}

export interface Dependencies {
    "bignumber.js": string;
    "readable-stream": string;
    "safe-buffer": string;
    sqlstring: string;
}

export interface DevDependencies {
    after: string;
    eslint: string;
    seedrandom: string;
    "timezone- mock": string;
    urun: string;
    utest: string;
}

export interface Release {
    from: Date;
    to: Date;
    count: number;
}

export interface Metadata {
    name: string;
    scope: string;
    version: string;
    description: string;
    date: Date;
    author: Author;
    publisher: Publisher;
    maintainers: Maintainer[];
    contributors: Contributor[];
    repository: Repository;
    links: Links;
    license: string;
    dependencies: Dependencies;
    devDependencies: DevDependencies;
    releases: Release[];
    hasTestScript: boolean;
    hasSelectiveFiles: boolean;
    readme: string;
}

export interface Download {
    from: Date;
    to: Date;
    count: number;
}

export interface Npm {
    downloads: Download[];
    dependentsCount: number;
    starsCount: number;
}

export interface Distribution {
    3600: number;
    10800: number;
    32400: number;
    97200: number;
    291600: number;
    874800: number;
    2624400: number;
    7873200: number;
    23619600: number;
    70858800: number;
    212576400: number;
}

export interface Issues {
    count: number;
    openCount: number;
    distribution: Distribution;
    isDisabled: boolean;
}

export interface Contributor2 {
    username: string;
    commitsCount: number;
}

export interface Commit {
    from: Date;
    to: Date;
    count: number;
}

export interface Status {
    context: string;
    state: string;
}

export interface Github {
    starsCount: number;
    forksCount: number;
    subscribersCount: number;
    issues: Issues;
    contributors: Contributor2[];
    commits: Commit[];
    statuses: Status[];
}

export interface Files {
    readmeSize: number;
    testsSize: number;
    hasChangelog: boolean;
}

export interface Sqlstring {
    required: string;
    stable: string;
    latest: string;
}

export interface SafeBuffer {
    required: string;
    stable: string;
    latest: string;
}

export interface ReadableStream {
    required: string;
    stable: string;
    latest: string;
}

export interface OutdatedDependencies {
    sqlstring: Sqlstring;
    "safe-buffer": SafeBuffer;
    "readable-stream": ReadableStream;
}

export interface Source {
    files: Files;
    linters: string[];
    coverage: number;
    outdatedDependencies: OutdatedDependencies;
}

export interface Collected {
    metadata: Metadata;
    npm: Npm;
    github: Github;
    source: Source;
}

export interface Quality {
    carefulness: number;
    tests: number;
    health: number;
    branding: number;
}

export interface Popularity {
    communityInterest: number;
    downloadsCount: number;
    downloadsAcceleration: number;
    dependentsCount: number;
}

export interface Maintenance {
    releasesFrequency: number;
    commitsFrequency: number;
    openIssues: number;
    issuesDistribution: number;
}

export interface Evaluation {
    quality: Quality;
    popularity: Popularity;
    maintenance: Maintenance;
}

export interface Detail {
    quality: number;
    popularity: number;
    maintenance: number;
}

export interface Score {
    final: number;
    detail: Detail;
}

export interface PackageInfo {
    analyzedAt: Date;
    collected: Collected;
    evaluation: Evaluation;
    score: Score;
}
