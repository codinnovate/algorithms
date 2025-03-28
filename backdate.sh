#!/bin/bash

# Initialize repo (uncomment if new repo needed)
# git init backdated-repo
# cd backdated-repo
# git remote add origin <your-github-repo-url>

# File to modify for commits
file="linear-time.js"
echo "Starting commits for 2019" > $file
git add $file

# Function to commit with a specific date
commit_with_date() {
    local date="$1"
    local msg="$2"
    GIT_AUTHOR_DATE="$date 12:00:00" GIT_COMMITTER_DATE="$date 12:00:00" git commit -m "$msg"
}

# Function to make multiple commits on a date
make_commits() {
    local date="$1"
    local count="$2"
    for ((i=1; i<=count; i++)); do
        echo "Commit $i on $date" >> $file
        git add $file
        commit_with_date "$date" "Commit $i for $date"
    done
}

# Exponential commit schedule
current_date="2019-01-01"
commit_counts=(1 2 4 8 16 32 64)  # Exponential: 2^(0 to 6)
dates=("2019-01-01" "2019-01-23" "2019-02-06" "2019-02-12" "2019-03-01" "2019-04-01" "2019-05-01")
skip_days=2

for ((i=0; i<${#commit_counts[@]}; i++)); do
    # Check if date exceeds Dec 31, 2019
    if [[ $(date -d "${dates[$i]}" +%s) -gt $(date -d "2019-12-31" +%s) ]]; then
        break
    fi

    # Make commits for current date
    make_commits "${dates[$i]}" "${commit_counts[$i]}"

    # Calculate next date (skip 2 days from last day of current burst)
    if [[ $i -lt $(( ${#dates[@]}-1 )) ]]; then
        current_date=$(date -d "${dates[$i]} + $skip_days days" "+%Y-%m-%d")
        dates[$((i+1))]="$current_date"
    fi
done

# Final burst on Dec 31, 2019 (adjust commits to fit)
remaining_days=$(date -d "2019-12-31 - $(date -d "${dates[-1]}" +%Y-%m-%d)" +%s)
if [[ $remaining_days -ge 0 ]]; then
    make_commits "2019-12-31" "128"  # Last burst, 2^7 = 128 commits
fi

# Push to remote
git push origin main  # Replace 'main' with your branch if different