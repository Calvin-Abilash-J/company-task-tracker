CREATE TABLE employees (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    role        VARCHAR(30)  NOT NULL,
    manager_id  INT REFERENCES employees(id)
);

CREATE TABLE projects (
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(150) NOT NULL,
    owner_id  INT REFERENCES employees(id)
);

CREATE TABLE tasks (
    id           SERIAL PRIMARY KEY,
    project_id   INT REFERENCES projects(id),
    title        VARCHAR(200) NOT NULL,
    description  TEXT,
    assignee_id  INT REFERENCES employees(id),
    status       VARCHAR(20) NOT NULL DEFAULT 'TODO',
    priority     VARCHAR(10) NOT NULL DEFAULT 'MEDIUM',
    due_date     DATE,
    created_at   TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE task_comments (
    id          SERIAL PRIMARY KEY,
    task_id     INT REFERENCES tasks(id) ON DELETE CASCADE,
    user_id     INT REFERENCES employees(id),
    comment     TEXT NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);
