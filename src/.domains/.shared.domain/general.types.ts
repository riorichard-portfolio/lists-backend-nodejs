export type ISuccessResult<ResultData> = { success: true } & ResultData

export interface IFailedResult<FailedReason extends string> {
    success: false
    getFailedReason(): FailedReason
}

export type TApplicationResults<ResultData, FailedReason extends string> =
    | ISuccessResult<ResultData>
    | IFailedResult<FailedReason>

export type IFoundRepositoryData<RepositoryData> = { found: true } & RepositoryData

export interface INotFoundRepositoryData {
    found: false
}

export type TRepositoryResults<RepositoryData> =
    | IFoundRepositoryData<RepositoryData>
    | INotFoundRepositoryData
