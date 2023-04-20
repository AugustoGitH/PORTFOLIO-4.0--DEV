

export type TResultCompare = {
  valueOriginal: any,
  valueEdited: any,
  condition: boolean
}

export type TReturnCompareEditValues = {
  comparisons: TResultCompare[],
  modified: boolean
}