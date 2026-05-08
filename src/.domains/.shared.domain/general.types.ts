export interface ISuccessResult<TResultData> {
  success: true
  getResultData(): TResultData
}

export interface IFailedResult<TFailedReason extends string> {
  success: false
  getFailedReason(): TFailedReason
}

export type TApplicationResults<
  TResultData,
  TFailedReason extends string | undefined = undefined
> = TFailedReason extends string
  ? ISuccessResult<TResultData> | IFailedResult<TFailedReason>
  : ISuccessResult<TResultData>
