/**
 * Key Value Mapping
 */
enum State {
  loading,
  done,
  error,
}
type GlobalApiStatus = {
  getUser: State | boolean;
  paginateUser: State | undefined;
  banUser: State | null;
  getPosts: State;
};

type UserApiStatus = {
  getUser: State;
  paginateUser: State | undefined;
  banUser: State | null;
};

type UserApiStatus2 = {
  getUser: GlobalApiStatus["getUser"];
  paginateUser: GlobalApiStatus["getUser"];
  banUser: GlobalApiStatus["getUser"];
};

type UserApiStatus3 = {
  [k in "getUser" | "paginateUser" | "banUser"]: GlobalApiStatus[k];
  // getUser:
  // paginateUser:
  // banUser:
};

type PickedUserApiStatus = Pick<
  GlobalApiStatus,
  "getUser" | "paginateUser" | "banUser"
>;

type OmitUserApiStatus = Omit<GlobalApiStatus, "getPosts">;

/**
 * keyof
 */
type AllKeys = keyof GlobalApiStatus;

const key: AllKeys = "getUser";

type KeyOfUserApiStatus = {
  [k in keyof GlobalApiStatus]: GlobalApiStatus[k];
};

type KeyOfUserApiStatus2 = {
  [k in Exclude<keyof GlobalApiStatus, "getPosts">]: GlobalApiStatus[k];
};
type KeyOfUserApiStatus3 = {
    [k in Exclude<keyof GlobalApiStatus, "getPosts">]?: GlobalApiStatus[k];
  };

interface LoadingStatus{
    type: 'loading'
    date: string[]
}

interface ErrorStatus{
    type: 'error'
    message: string;
}

type FetchStatus = LoadingStatus | ErrorStatus;

type StatusType = FetchStatus['type']