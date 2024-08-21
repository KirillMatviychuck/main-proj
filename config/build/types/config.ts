export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string
}

export type BuildMode = 'development' | 'production';

export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode;
    isDev: Boolean;
    port: number
}

export interface BuildEnv {
    port: number;
    mode: BuildMode;
}