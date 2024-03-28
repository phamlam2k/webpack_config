import { APIProvider } from "@vis.gl/react-google-maps";

type IRootProviderProps = {
  children: React.ReactNode;
};

const RootProvider = ({ children }: IRootProviderProps) => {
  return (
    <APIProvider apiKey="AIzaSyBEYKsBNZdwFNwobQFD8XNtN-DKSk70LA0">
      {children}
    </APIProvider>
  );
};

export default RootProvider;
