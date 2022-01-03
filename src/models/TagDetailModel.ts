export interface TagDetailModel {
    schemaVersion: number;
    name: string;
    tag: string;
    architecture: string;
    signatures: SignatureModel[];
    history: HistoryModel[];
}

export interface SignatureModel {
    header: any;
    signature: string;
    protected: string;
}

export interface HistoryModel {
    v1Compatibility: any;
}

export interface V1CompatibilityModel {
    architecture: string;
    created: Date;
    docker_version: string;
    id: string;
    os: string;
    config: ConfigModel;
}

export interface ConfigModel {
    Env: string[];
    Cmd: string[]
}