import moment from 'moment'

moment.locale('zh-CN');
/**
 * HH:mm
 */
export const time2HHmm = (value) => {
    return moment(value).format('HH:mm')
}

/**
 * @param value
 * @return 星期
 */
export const time2day = (value) => {
    return moment(value).format("dddd");
}