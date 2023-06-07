export interface FormData {
  email: string;
  password: string;
}

export interface Login {
  token: string;
}

export interface Profile {
  email: string;
}

interface LayoutProps {
  children?: JSX.Element;
}
