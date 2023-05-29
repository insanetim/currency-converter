import _ from 'lodash'

export const roundToThousandths = (value: number): number => _.round(value, 3)
