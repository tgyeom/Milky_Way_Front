import { atom, selector } from "recoil";
import { ArticleCard } from "../../typings/db";

interface UserCompareState {
  email?: string;
  id?: string;
  password?: string;
  name?: string;
  dpt?: string;
  number?: string;
}

interface UserCareerState {
  userCareer?: any;
  userCertificate?: any;
  userLineText?: any;
}

interface UserCareerInfo {
  userLineText: string;
  userDpt?: string;
  userLocation?: string;
}

interface UserCareerInfo {
  userDpt?: string;
  userLocation?: string;
}

export const loadingStateAtom = atom<boolean>({
  key: "loadingStateAtom",
  default: true,
});

export const loadingStateSelector = selector<boolean>({
  key: "loadingStateSelector",
  get: ({ get }) => get(loadingStateAtom),
});

/**
 * 네비게이션 바 상태
 */

export const navState = atom({
  key: "navState",
  default: "home", //home, list, career
});
/**
 * signupemail -> signupcompare state상태
 * @type {boolean}
 */

export const emailSuccesses = atom<boolean>({
  key: "emailSuccessIn",
  default: false,
});

/**
 * signupcompare -> signupinfo state상태
 * @type {boolean}
 */

export const compareSuccesses = atom<boolean>({
  key: "compareSuccessIn",
  default: false,
});

/**
 * sendLogin 성공시 recoil persist로 로컬스토리지에 로그인 유저네임 저장
 * @type {string}
 */
// export const isLoggedInUserName = atom<string>({
//   key: "",
//   default: "",
//   effects_UNSTABLE: [persistAtom],
// });

// export const isLoggedInUserNameSelector = selector<string>({
//   key: "isLoggedInUserNameSelector",
//   get: ({ get }) => {
//     const userName = get(isLoggedInUserName);
//     return userName;
//   },
//   set: ({ set }, newValue: any) => {
//     set(userCompareState, newValue);
//   },
// });
/**
 * 회원가입 state, 필요한지 따져봐야함k
 * @type {boolean}
 */

export const userJoinState = atom<boolean>({
  key: "userJoinState",
  default: false,
});

/**
 * 로그인 상태 관리 state, true값으로 usercomparevalue안에서 email, name등 정보를 사용할지 여부?
 * @type {boolean}
 */

export const isLoggedInState = atom<boolean>({
  key: "isLoggedIn",
  default: localStorage.getItem("token") ? true : false,
});

/**
 * <atom> 회원가입 단계에서 사용자 이메일, id, 사용자 비밀번호, 사용자 이름, 사용자 학과, 사용자 전화번호
 * @type {string}
 * @param {string} email 사용자 이메일
 * @param {string} id 사용자 ID
 * @param {string} password 사용자 비밀번호
 * @param {string} name 사용자 이름
 * @param {string} dpt 사용자 학과
 * @param {string} number 사용자 전화번호
 */

export const userCompareState = atom<UserCompareState>({
  key: "userCompareState",
  default: {
    email: "",
    id: "",
    password: "",
    name: "",
    dpt: "",
    number: "",
  },
});

/**
 * <selector> 회원가입 단계에서 사용자 이메일, id, 사용자 비밀번호, 사용자 이름, 사용자 학과, 사용자 전화번호
 * @type {string}
 * @param {string} email 사용자 이메일
 * @param {string} id 사용자 ID
 * @param {string} password 사용자 비밀번호
 * @param {string} name 사용자 이름
 * @param {string} dpt 사용자 학과
 * @param {string} number 사용자 전화번호
 */

export const userCompareValues = selector<UserCompareState>({
  key: "userCompareValues",
  get: ({ get }) => {
    const userCompare = get(userCompareState);
    return userCompare;
  },
  set: ({ set }, newValue) => {
    set(userCompareState, newValue);
  },
});

/**
 * 이력서페이지 정보조회
 */
export const userCareerState = atom<UserCareerState>({
  key: "userCareerState",
  default: {
    userCareer: [],
    userCertificate: [],
  },
});

export const userCareerStateSelector = selector<UserCareerState>({
  key: "userCareerValues",
  get: ({ get }) => {
    const userCareer = get(userCareerState);
    return userCareer;
  },
  set: ({ set }, newValue: any) => {
    set(userCareerState, newValue);
  },
});

/**
 * 이력서 내에 유저 정보 atom
 */
export const userCareerUserInfoState = atom<UserCareerInfo>({
  key: "userCareerUserInfostate",
  default: {
    userDpt: "",
    userLocation: "",
    userLineText: "",
  },
});

/**
 * 이력서 유저정보 selector
 */
export const userCareerUserInfoStateSelector = selector<UserCareerInfo>({
  key: "userCareerUserInfoState",
  get: ({ get }) => {
    const userCareerUserInfo = get(userCareerUserInfoState);
    return userCareerUserInfo;
  },

  set: ({ set }, newValue: any) => {
    set(userCareerUserInfoState, newValue);
  },
});
/**
 * 마이페이지 정보조회
 */
export const userInfoState = atom<any>({
  key: "userInfoState",
  default: {
    userName: "",
    userEmail: "",
    userNickName: "",
    userCareerCard: "",
    userNumber: "",
  },
});

export const userInfoStateSelector = selector<any>({
  key: "userInfoStateSelector",
  get: ({ get }) => {
    const userInfoUserInfoState = get(userInfoState);
    return userInfoUserInfoState;
  },

  set: ({ set }, newValue: any) => {
    set(userInfoState, newValue);
  },
});

/**
 * 마이페이지 찜리스트 조회
 */
export const ArticleDibsState = atom<any>({
  key: "ArticleDibsState",
  default: {},
});

export const ArticleDibsStateSelector = selector<any>({
  key: "userInfoDibsStateSelector",
  get: ({ get }) => {
    const ArticleDibsStateValue = get(ArticleDibsState);
    return ArticleDibsStateValue;
  },

  set: ({ set }, newValue: any) => {
    set(ArticleDibsState, newValue);
  },
});

//스터디 게시물

/**
 * <atom> article 상세 조회
 */
export const ArticleCardCurrentState = atom({
  key: "articleCurrentState",
  default: {
    articleId: 0,
    articleMemberNo: 0,
    articleMemberName: "",
    articleType: "",
    articleRecruitmentState: true,
    articleTitle: "",
    articleContent: "",
    articleLikes: 0,
    articleApply: 0,
    articleApplyNow: 0,
    articleStartDay: "",
    articleEndDay: "",
    articleMentorNeeded: false,
    articleMentorTag: "",
    isAuthor: false,
  },
});

/**
 * <atom> 현재 조회하고 있는 게시물 상세
 * */
export const ArticleCurrentState = atom<any>({
  key: "ArticleCurrentState",
  default: "",
});

export const ArticleCardStateSelector = selector({
  key: "ArticleCurrentStateSelector",
  get: ({ get }) => {
    return get(ArticleCardCurrentState);
  },
  set: ({ set }, newValue: any) => {
    set(ArticleCardCurrentState, newValue);
  },
});

/**
 * <atom> article 리스트 조회
 */
export const ArticleListTypeState = atom({
  key: "articleListTypeState",
  default: [],
});

/**
 *  마이페이지에서 내가 "등록"한 프로젝트 보여주기
 */

export const ArticleApplyAtom = atom<any>({
  key: "ArticleApplyAtom",
  default: "",
});

export const ArticleApplySelector = selector({
  key: "ArticleApplySelector",
  get: ({ get }) => {
    return get(ArticleApplyAtom);
  },
  set: ({ set }, newValue: any) => {
    set(ArticleApplyAtom, newValue);
  },
});

/**
 *  마이페이지에서 내가 "신청"한 프로젝트 보여주기
 */

export const ArticleArticleAtom = atom<any>({
  key: "ArticleArticleAtom",
  default: "",
});

export const ArticleArticleSelector = selector({
  key: "ArticleArticleSelector",
  get: ({ get }) => {
    return get(ArticleArticleAtom);
  },
  set: ({ set }, newValue: any) => {
    set(ArticleArticleAtom, newValue);
  },
});

/**
 * <atom> article 리스트 검색 기준 (사용자 입력)
 */
export const ArticleListSearchState = atom<string>({
  key: "articleListSearchState",
  default: "",
});

/**
 * <atom> 현재 리스트 타입 필터링 기준
 */
export const ArticleListTypeFilterState = atom({
  key: "articleListTypeFilterState",
  default: "all", // "all", "study", "project"
});

/**
 * <selector> 리스트 타입에 따라 필터링 된 article 리스트
 */
export const filteredArticleListTypeState = selector({
  key: "filteredArticleListState",
  get: ({ get }) => {
    const filter = get(ArticleListTypeFilterState);
    const list = get(ArticleListTypeState);

    switch (filter) {
      case "study":
        return list.filter(
          (article: ArticleCard) => article.articleType === "study"
        );
      case "project":
        return list.filter(
          (article: ArticleCard) => article.articleType === "project"
        );

      default:
        return list;
    }
  },
});

/**
 * <atom> 현재 모집 상태 필터링 기준
 */

export const ArticleRecruitmentOptionState = atom({
  key: "articleRecruitmentOptionState",
  default: "recruting",
});

/**
 * <selector> 모집 상태에 따라 필터링된 article리스트
 */

export const filteredArticleRecruitmentOptionListState = selector({
  key: "filteredArticleRecruitmentOptionState",
  get: ({ get }) => {
    const filter = get(ArticleRecruitmentOptionState);
    const list = get(filteredArticleListTypeState);

    switch (filter) {
      case "all":
        return list;
      case "recruting":
        return list.filter(
          (article: ArticleCard) => article.articleRecruitmentState
        );
      case "recruitmentCompleted":
        return list.filter(
          (article: ArticleCard) => !article.articleRecruitmentState
        );

      default:
        return list;
    }
  },
});

/**
 * <atom> 최신순/인기순 정렬 방식 기준
 */

export const ArticleLatestOrPopularOptionState = atom({
  key: "articleLatestOrPopularOptionState",
  default: "latest",
});

/**
 * <selector> 최신순/인기순 정렬 방식 기준에 따라 재 정렬한 article 리스트
 */
export const filteredArticleLatestOrPopularOptionListState = selector({
  key: "filteredArticleLatestOrPopularOptionListState",
  get: ({ get }) => {
    const option = get(ArticleLatestOrPopularOptionState);
    const list = get(filteredArticleRecruitmentOptionListState);
    console.log(option);

    switch (option) {
      case "latest":
        return list.slice().sort((a: ArticleCard, b: ArticleCard) => {
          const articleEndDayA = new Date(a.articleEndDay);
          const articleEndDayB = new Date(b.articleEndDay);
          return articleEndDayA.getTime() - articleEndDayB.getTime();
        });

      case "popular":
        return list.slice().sort((a: ArticleCard, b: ArticleCard) => {
          return b.articleLikes - a.articleLikes;
        });

      default:
        return list;
    }
  },
});

/**
 * <atom> 게시물 상세 접속 시 사용자 상태 (작성, 좋아요, 지원 여부)
 */

export const UserArticleInteractionState = atom({
  key: "userArticleInteractionState",
  default: {
    isAuthor: false,
    isLike: false,
    isApplier: false,
  },
});

/**
 * <atom> 게시물 상세 상단 메뉴 버튼 클릭 상태 (원 3개 모양의 버튼 클릭 상태)
 */

export const articleDetailModalClickState = atom({
  key: "articleDetailModalClickState",
  default: false,
});

/**
 * <atom> 게시물 소개 /QnA 탭 클릭 상태
 */
export const ArticleDetailIntroOrQnaTabState = atom({
  key: "articleDetailIntroOrQnaTabState",
  default: "intro", // intro, qna
});

/**
 * <atom> 현재 게시물 지원자 리스트 상태
 */

export const ArticleApplyUserListState = atom({
  key: "articleApplyUserListState",
  default: [],
});

/**
 * <atom> 현재 지원자 리스트 이력서 모달 상태
 */

export const ArticleApplyUserResumeModalState = atom({
  key: "articleApplyUserResumeModalState",
  default: {
    applyNo: 0,
    modalState: false,
  },
});

export const ArticleApplyUserResumeDataState = atom({
  key: "articleApplyUserResumeDataState",
  default: { careerDtoList: [], certificationDtoList: [] },
});

export const ArticleApplyUserInfoDataState = atom({
  key: "articleApplyUserInfoDataState",
  default: {
    memberId: "",
    memberName: "",
    memberPhoneNum: "",
    studentLocate: "",
    studentMajor: "",
    studentOneLineShow: "",
  },
});
