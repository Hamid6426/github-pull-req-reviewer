Written in Reverse Chronological Order:

Oct 13 23:13:13.57
POST
---
next-pull-request-reviewer.vercel.app
/api/webhook-handler
Review Comment posted: { url: 'https://api.github.com/repos/Hamid6426/testing-github-api/issues/comments/2409073273', html_url: 'https://github.com/Hamid6426/testing-github-api/pull/8#issuecomment-2409073273', issue_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/issues/8', id: 2409073273, node_id: 'IC_kwDOM-MjC86Pl4p5', user: { login: 'Hamid6426', id: 148252210, node_id: 'U_kgDOCNYmMg', avatar_url: 'https://avatars.githubusercontent.com/u/148252210?u=80d669851430b6437cc649542d5c0bb70693f891&v=4', gravatar_id: '', url: 'https://api.github.com/users/Hamid6426', html_url: 'https://github.com/Hamid6426', followers_url: 'https://api.github.com/users/Hamid6426/followers', following_url: 'https://api.github.com/users/Hamid6426/following{/other_user}', gists_url: 'https://api.github.com/users/Hamid6426/gists{/gist_id}', starred_url: 'https://api.github.com/users/Hamid6426/starred{/owner}{/repo}', subscriptions_url: 'https://api.github.com/users/Hamid6426/subscriptions', organizations_url: 'https://api.github.com/users/Hamid6426/orgs', repos_url: 'https://api.github.com/users/Hamid6426/repos', events_url: 'https://api.github.com/users/Hamid6426/events{/privacy}', received_events_url: 'https://api.github.com/users/Hamid6426/received_events', type: 'User', site_admin: false }, created_at: '2024-10-13T18:13:13Z', updated_at: '2024-10-13T18:13:13Z', author_association: 'OWNER', body: 'The code still calls the `dec()` function even though it was removed. \n', reactions: { url: 'https://api.github.com/repos/Hamid6426/testing-github-api/issues/comments/2409073273/reactions', total_count: 0, '+1': 0, '-1': 0, laugh: 0, hooray: 0, confused: 0, heart: 0, rocket: 0, eyes: 0 }, performed_via_github_app: null }

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:13:12.68
POST
---
next-pull-request-reviewer.vercel.app
/api/webhook-handler
Code Diff (limited): diff --git a/counter.js b/counter.js index 787aa0d..f80fe42 100644 --- a/counter.js +++ b/counter.js @@ -2,8 +2,6 @@ let a = 7; function inc() { a++; } -function dec() { - a--; -} + inc(); dec();

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:13:12.68
POST
---
next-pull-request-reviewer.vercel.app
/api/webhook-handler
PR Body: I removed the dec() function from the code

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:13:12.68
POST
---
next-pull-request-reviewer.vercel.app
/api/webhook-handler
PR Title: Update counter.js

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:13:12.49
POST
---
next-pull-request-reviewer.vercel.app
/api/webhook-handler
Received body: { action: 'opened', number: 8, pull_request: { url: 'https://api.github.com/repos/Hamid6426/testing-github-api/pulls/8', id: 2121557493, node_id: 'PR_kwDOM-MjC85-dGX1', html_url: 'https://github.com/Hamid6426/testing-github-api/pull/8', diff_url: 'https://github.com/Hamid6426/testing-github-api/pull/8.diff', patch_url: 'https://github.com/Hamid6426/testing-github-api/pull/8.patch', issue_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/issues/8', number: 8, state: 'open', locked: false, title: 'Update counter.js', user: { login: 'Hamid6426', id: 148252210, node_id: 'U_kgDOCNYmMg', avatar_url: 'https://avatars.githubusercontent.com/u/148252210?v=4', gravatar_id: '', url: 'https://api.github.com/users/Hamid6426', html_url: 'https://github.com/Hamid6426', followers_url: 'https://api.github.com/users/Hamid6426/followers', following_url: 'https://api.github.com/users/Hamid6426/following{/other_user}', gists_url: 'https://api.github.com/users/Hamid6426/gists{/gist_id}', starred_url: 'https://api.github.com/users/Hamid6426/starred{/owner}{/repo}', subscriptions_url: 'https://api.github.com/users/Hamid6426/subscriptions', organizations_url: 'https://api.github.com/users/Hamid6426/orgs', repos_url: 'https://api.github.com/users/Hamid6426/repos', events_url: 'https://api.github.com/users/Hamid6426/events{/privacy}', received_events_url: 'https://api.github.com/users/Hamid6426/received_events', type: 'User', site_admin: false }, body: 'I removed the dec() function from the code', created_at: '2024-10-13T18:13:10Z', updated_at: '2024-10-13T18:13:10Z', closed_at: null, merged_at: null, merge_commit_sha: null, assignee: null, assignees: [], requested_reviewers: [], requested_teams: [], labels: [], milestone: null, draft: false, commits_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/pulls/8/commits', review_comments_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/pulls/8/comments', review_comment_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/pulls/comments{/number}', comments_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/issues/8/comments', statuses_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/statuses/8aee86205699ddb59c0abe2b375ba6e09ae2982b', head: { label: 'Hamid6426:testing-branch', ref: 'testing-branch', sha: '8aee86205699ddb59c0abe2b375ba6e09ae2982b', user: [Object], repo: [Object] }, base: { label: 'Hamid6426:main', ref: 'main', sha: 'f0db5e50a6e2cd37a4fea35b9804cc98cca96036', user: [Object], repo: [Object] }, _links: { self: [Object], html: [Object], issue: [Object], comments: [Object], review_comments: [Object], review_comment: [Object], commits: [Object], statuses: [Object] }, author_association: 'OWNER', auto_merge: null, active_lock_reason: null, merged: false, mergeable: null, rebaseable: null, mergeable_state: 'unknown', merged_by: null, comments: 0, review_comments: 0, maintainer_can_modify: false, commits: 1, additions: 1, deletions: 3, changed_files: 1 }, repository: { id: 870523659, node_id: 'R_kgDOM-MjCw', name: 'testing-github-api', full_name: 'Hamid6426/testing-github-api', private: false, owner: { login: 'Hamid6426', id: 148252210, node_id: 'U_kgDOCNYmMg', avatar_url: 'https://avatars.githubusercontent.com/u/148252210?v=4', gravatar_id: '', url: 'https://api.github.com/users/Hamid6426', html_url: 'https://github.com/Hamid6426', followers_url: 'https://api.github.com/users/Hamid6426/followers', following_url: 'https://api.github.com/users/Hamid6426/following{/other_user}', gists_url: 'https:

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:13:12.49
POST
---
next-pull-request-reviewer.vercel.app
/api/webhook-handler
Received event: pull_request

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:13:12.47
POST
200
next-pull-request-reviewer.vercel.app
/api/webhook-handler

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:11:15.40
POST
---
next-pull-request-reviewer.vercel.app
/api/webhook-handler
Ping event received: Responsive is better than fast.

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:11:15.40
POST
---
next-pull-request-reviewer.vercel.app
/api/webhook-handler
Received body: { zen: 'Responsive is better than fast.', hook_id: 507143243, hook: { type: 'Repository', id: 507143243, name: 'web', active: true, events: [ 'pull_request' ], config: { content_type: 'json', insecure_ssl: '0', url: 'https://next-pull-request-reviewer.vercel.app/api/webhook-handler' }, updated_at: '2024-10-13T18:11:14Z', created_at: '2024-10-13T18:11:14Z', url: 'https://api.github.com/repos/Hamid6426/testing-github-api/hooks/507143243', test_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/hooks/507143243/test', ping_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/hooks/507143243/pings', deliveries_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/hooks/507143243/deliveries', last_response: { code: null, status: 'unused', message: null } }, repository: { id: 870523659, node_id: 'R_kgDOM-MjCw', name: 'testing-github-api', full_name: 'Hamid6426/testing-github-api', private: false, owner: { login: 'Hamid6426', id: 148252210, node_id: 'U_kgDOCNYmMg', avatar_url: 'https://avatars.githubusercontent.com/u/148252210?v=4', gravatar_id: '', url: 'https://api.github.com/users/Hamid6426', html_url: 'https://github.com/Hamid6426', followers_url: 'https://api.github.com/users/Hamid6426/followers', following_url: 'https://api.github.com/users/Hamid6426/following{/other_user}', gists_url: 'https://api.github.com/users/Hamid6426/gists{/gist_id}', starred_url: 'https://api.github.com/users/Hamid6426/starred{/owner}{/repo}', subscriptions_url: 'https://api.github.com/users/Hamid6426/subscriptions', organizations_url: 'https://api.github.com/users/Hamid6426/orgs', repos_url: 'https://api.github.com/users/Hamid6426/repos', events_url: 'https://api.github.com/users/Hamid6426/events{/privacy}', received_events_url: 'https://api.github.com/users/Hamid6426/received_events', type: 'User', site_admin: false }, html_url: 'https://github.com/Hamid6426/testing-github-api', description: 'Some tests required for another project with this repo', fork: false, url: 'https://api.github.com/repos/Hamid6426/testing-github-api', forks_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/forks', keys_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/keys{/key_id}', collaborators_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/collaborators{/collaborator}', teams_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/teams', hooks_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/hooks', issue_events_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/issues/events{/number}', events_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/events', assignees_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/assignees{/user}', branches_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/branches{/branch}', tags_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/tags', blobs_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/git/blobs{/sha}', git_tags_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/git/tags{/sha}', git_refs_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/git/refs{/sha}', trees_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/git/trees{/sha}', statuses_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/statuses/{sha}', languages_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/languages', stargazers_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/stargazers', contributors_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/contributors', subscribers_url: 'https://api.github.com/repos/Hamid6426/testing-github-api/subscribers', subscription_url: 'h

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:11:15.40
POST
---
next-pull-request-reviewer.vercel.app
/api/webhook-handler
Received event: ping

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:11:15.39
POST
200
next-pull-request-reviewer.vercel.app
/api/webhook-handler

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:11:14.65
POST
200
next-pull-request-reviewer.vercel.app
/api/setup-webhook

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------


Oct 13 23:10:26.56
GET
307
next-pull-request-reviewer.vercel.app
/api/auth/callback

----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

Oct 13 23:10:17.61
GET
307
next-pull-request-reviewer.vercel.app
/api/auth