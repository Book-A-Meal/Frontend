import { notifications } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons-react";

const showAppNotification = ({
  title = "Success!",
  message = "This action was completed successfully",
  isError = false,
}: {
  title?: string;
  message?: string;
  isError?: boolean;
}) => {
  notifications.show({
    title: title,
    message: message,
    color: isError ? "red" : "blue",
    icon: isError ? <IconX /> : <IconCheck />,
  });
};


export { showAppNotification };
