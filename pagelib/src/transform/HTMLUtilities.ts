const escapeCallback = (s: string): string => {
    switch (s) {
        case '\'':
            return '&#039;'
        case '"':
            return '&quot;'
        case '<':
            return '&lt;'
        case '>':
            return '&gt;'
        case '&':
            return '&amp;'
        default:
            return ''
    }
}

const escape = (input: string): string => {
    return input.replace( /['"<>&]/g, escapeCallback )
}

export default {
    escape
}