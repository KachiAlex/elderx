#!/bin/bash
PGPASSWORD=lJaAOrNLtVWCfZnVICjJ9s4cC2PwGnJe psql -h localhost -p 5432 -U postgres -d caremaster -t -c "SELECT email, user_type, institution_id FROM users ORDER BY created_at DESC LIMIT 20;"
