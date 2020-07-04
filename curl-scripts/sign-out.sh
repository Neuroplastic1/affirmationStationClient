# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh
curl "https://tic-tac-toe-wdi.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}"
echo
