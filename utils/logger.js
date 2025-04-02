function getInfoLog(request) {
  const timestamp = new Date().toISOString();
  console.log(`INFO [${timestamp}]: ${request.method} – ${request.url}`);
}

function getErrorLog(message) {
  const timestamp = new Date().toISOString();
  console.log(`ERROR [${timestamp}]: ${message}`);
}

function getProcessLog(message) {
  const timestamp = new Date().toISOString();
  console.log(`PROCESS [${timestamp}]: ${message}`);
}

module.exports = {
  getInfoLog,
  getErrorLog,
  getProcessLog
};
