export interface ISuccessResult<ResultData> {
    success: true
    getResultData(): ResultData
}

export interface IFailedResult<FailedReason extends string | null> {
    success: false
    getFailedReason(): FailedReason
}

export type TApplicationResults<ResultData, FailedReason extends string | null> =
    | ISuccessResult<ResultData>
    | IFailedResult<FailedReason>
