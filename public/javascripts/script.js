document.addEventListener("DOMContentLoaded", () => {
  if (window.success_msg && window.success_msg.length > 0) {
    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      text: window.success_msg
    });
  }

  if (window.error_msg && window.error_msg.length > 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: window.error_msg
    });
  }
});
