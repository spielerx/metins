import { store } from "app/store";
import { Provider } from "react-redux";

export const StoreProvider = ({ children }: React.PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
