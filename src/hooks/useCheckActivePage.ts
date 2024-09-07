import { useLocation } from "react-router-dom";

export const useCheckActivePage = (pageIdentifier: string) => {
  // library hooks
  const { pathname } = useLocation();

  // data
  const isActivePage = pathname.includes(pageIdentifier);

  return isActivePage;
};
