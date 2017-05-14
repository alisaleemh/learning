package main

import  (
  "io"
  "net/http"
  "os/exec"
  )

  func hello(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "text/html; charset=UTF-8")
    w.WriteHeader(http.StatusOK)

    out, err := exec.Command("./raw_html.sh").Output()
    
	if err != nil {
		panic(err)
	}
	sout := string(out[:])


    io.WriteString(w, sout)
  }

  func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/", hello)
    http.ListenAndServe(":8080", mux)
  }
