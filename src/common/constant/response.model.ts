/* eslint-disable prettier/prettier */


class ResponseConst {
    public static SUCCESS = "Success";
    public static FAIL = "Fail"
}

class ResponseCodeConst {
    public static CTWS000 = "CTWS000";
    public static BTWS000 = "BTWS000";
}

class ResponseMsgConst {
    public static CTWS000 = "Process successful";
    public static BTWS000 = "Invalid credential";
}

export {
    ResponseConst,
    ResponseCodeConst,
    ResponseMsgConst
}