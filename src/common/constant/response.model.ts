/* eslint-disable prettier/prettier */


class ResponseConst {
    public static SUCCESS = "Success";
    public static FAIL = "Fail"
}

class ResponseCodeConst {
    public static CTWS000 = "CTWS000";

    public static BTWS000 = "BTWS000";
    public static BTWS001 = "BTWS001";
    public static BTWS002 = "BTWS002";
}

class ResponseMsgConst {
    public static CTWS000 = "Process successful";

    public static BTWS000 = "Invalid credential";
    public static BTWS001 = "User already exists";
    public static BTWS002 = "No such user";
}

export {
    ResponseConst,
    ResponseCodeConst,
    ResponseMsgConst
}