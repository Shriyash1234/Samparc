export const setUserName = (userName,userMail) => {
    return {
      type: "SNAME",
      payloadName: userName,
      payloadMail: userMail
    }
  }