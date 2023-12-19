import Swal from "sweetalert2";

export const showAlertMessage = ( title, text, icon ) => {
  return Swal.fire({
    title,
    text,
    icon,
  });
};
