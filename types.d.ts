import { COLORS } from "./assets/constants/theme";

export type AuthResponce = {
    __typename: "TokenPair";
    accessToken: string;
    refreshToken: string;
    status: string;
};

export type User = {
    __typename: 'User';
    id: string;
    login: string;
    email: string;
    dateOfBirth: string;
    description: string;
    name: string;
    phone: string;
    sex: string;
    address: {
        city: string;
    };
    subscribersCount: number;
    website: string;
    shortDescription: string;
    avatar: {
        path: string;
    };
    likesCount: number;
    viewsCount: number;
};

export type UserProps = {
    user: User | null;
};

export type BaseError = {
    __typename: 'BaseError';
    status: string;
};

export type FormInputProps = TextInputProps & {
    placeholder: string,
    secureTextEntry?: boolean,
    appendComponent?: any;
    errorMsg: string;
    onTextChange: (text: string) => void;
};


export type RootStackParamList = {
    BottomTab: undefined;
    Auth: undefined;
};

export type BottomTabStackParamList = {
    Home: undefined;
    Draw: undefined;
    Bookmark: undefined;
    Profile: undefined;
};

export interface AuthContextData {
    authToken: string | null;
    signInUser: (login: string, password: string) => Promise<void>;
    authUser: User | null;
    signOut: () => Promise<void>;
}


export interface AuthContextProviderProps {
    children: React.ReactNode;
}

export type ColorKey = keyof typeof COLORS;

export type TimerProps = {
    timer: number;
};

export type TimerCardProp = {
    digit: string,
    color: ColorKey
}

export type TextButtonProps = {
    icon?: any, 
    text: string, 
    color: ColorKey, 
    onPress: () => void, 
    textColor?: ColorKey
}

export type LayoutProps = {
    title: string,
    leftIcon: any,
    titleColor: ColorKey,
    subtitle: string,
    subtitleColor?: ColorKey,
    subtitleIcon?: any,
    logoSource: any ,
    logoSize?: string,
    children: ReactNode,
}


export type Item = {
    id: number;
    image: {
        uri: string;
    };
    quantity: number;
};

export type ItemsProps = {
    items: Item[];
};

export type HearderProps = {
    title: string,
    icon: any;
    color: ColorKey
}

export type FormInputProps =  TextInputProps & {
    placeholder: string,
    secureTextEntry?: boolean,
    appendComponent?: any;
    errorMsg: string;
    onTextChange: (text: string) => void;
  };