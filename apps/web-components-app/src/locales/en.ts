import en from "vuetify/src/locale/en";

export default {
  ...en,
  qrScanner: {
    pointCamera: "Point camera at QR code",
    sendButtonText: "Send",
    errors: {
      notAllowed: "Error: You must allow access to the camera",
      notFound: "Error: No camera on this device",
      unknown: "Error: {0}",
    },
  },
  colorPicker: {
    pickColor: "Pick a color",
    sendButtonText: "Send",
  },
  datePicker: {
    pickDate: "Pick a date",
    sendButtonText: 'Send "{0}"',
  },
  timePicker: {
    pickTime: "Pick a time",
    sendButtonText: 'Send "{0}"',
  },
};
