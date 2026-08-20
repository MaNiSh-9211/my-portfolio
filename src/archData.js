export const NODES = [
  { id: "clients", x: 40, y: 40, w: 180, h: 95, tint: "b", icon: "mdi:monitor", title: "Clients", sub: "Web · Mobile · CI · 3rd-party", tags: ["HTTP/3", "TLS 1.3"] },
  { id: "cloudflare", x: 300, y: 40, w: 240, h: 130, tint: "o", icon: "simple-icons:cloudflare", title: "Cloudflare Edge", sub: "DNS · CDN · WAF · DDoS shield", tags: ["anycast", "geo DNS", "bot fight"] },
  { id: "cdncache", x: 300, y: 260, w: 170, h: 80, tint: "o", icon: "mdi:cloud-outline", title: "Edge Cache", sub: "Static + dynamic · TTL", tags: ["purge", "stale-while-revalidate"] },
  { id: "control", x: 1180, y: 20, w: 260, h: 95, tint: "b", icon: "mdi:swap-horizontal", title: "Control Plane · Sidecar", sub: "Config · filewatch · ArcSwap", tags: ["<6s reload", "zero-downtime"] },
  { id: "gateway", x: 660, y: 150, w: 290, h: 180, tint: "b", icon: "mdi:api", title: "API Gateway", sub: "LB · rate limit · Rust FFI / Lua", tags: ["JWT", "WAF", "rate limit", "breaker", "versioning"] },
  { id: "auth", x: 40, y: 400, w: 210, h: 130, tint: "g", icon: "mdi:shield-account-outline", title: "Auth / UAM", sub: "OAuth 2.0 · OIDC · JWT", tags: ["revocation", "bloom filter", "RBAC"] },
  { id: "redis", x: 40, y: 560, w: 210, h: 125, tint: "o", icon: "logos:redis", title: "Redis Cluster", sub: "Cache · sessions · limits", tags: ["LRU/LFU", "stampede shield"] },
  { id: "kafka", x: 300, y: 650, w: 210, h: 105, tint: "b", icon: "logos:kafka", title: "Kafka / RabbitMQ", sub: "Event bus · async flows", tags: ["partitions", "DLQ", "exactly-once"] },
  { id: "idservice", x: 560, y: 650, w: 200, h: 95, tint: "g", icon: "mdi:identifier", title: "ID Service", sub: "Snowflake-style · unique IDs", tags: ["shard-safe", "64-bit"] },
  { id: "services", x: 840, y: 410, w: 290, h: 150, tint: "o", icon: "mdi:server-network", title: "Microservices", sub: "Java 21 · Node.js · gRPC / REST", tags: ["SAGA", "outbox", "idempotency"] },
  { id: "search", x: 470, y: 300, w: 190, h: 95, tint: "b", icon: "logos:elasticsearch", title: "Search", sub: "Elasticsearch · inverted index", tags: ["shards", "ILM", "CDC sync"] },
  { id: "vector", x: 560, y: 430, w: 200, h: 95, tint: "b", icon: "logos:qdrant", title: "Vector DB", sub: "Qdrant · embeddings", tags: ["HNSW", "payload filter"] },
  { id: "pgbouncer", x: 850, y: 650, w: 220, h: 95, tint: "g", icon: "mdi:database-outline", title: "pgBouncer", sub: "Connection pooler", tags: ["transaction pooling", "stmts cache"] },
  { id: "datastore", x: 1080, y: 620, w: 320, h: 130, tint: "g", icon: "logos:postgresql", title: "Sharded Data Store", sub: "PostgreSQL · virtual sharding", tags: ["lookup vindex", "256 vshards", "partition"] },
  { id: "replicas", x: 1420, y: 650, w: 180, h: 95, tint: "b", icon: "mdi:database-sync-outline", title: "Replicas", sub: "Read-only · async", tags: ["read-after-write", "lag guard"] },
  { id: "k8s", x: 1400, y: 340, w: 200, h: 95, tint: "g", icon: "logos:kubernetes", title: "Kubernetes", sub: "Orchestration · ingress LB", tags: ["HPA", "mesh", "canary"] },
  { id: "obs", x: 1400, y: 160, w: 200, h: 95, tint: "o", icon: "logos:datadog", title: "Observability", sub: "Metrics · traces · logs", tags: ["SLO", "OpenTelemetry"] }
];

export const MAIN_PATH =
  "M220 85 C 270 85, 270 105, 300 105 L 540 105 C 600 105, 620 130, 660 150 L 790 330 C 810 360, 830 380, 845 410 L 920 560 C 920 590, 920 620, 920 650 L 1070 697 C 1075 697, 1075 680, 1080 680";

export const LINKS = [
  "M420 170 C 420 200, 420 230, 420 260",
  "M1310 115 C 1250 130, 1080 140, 952 180",
  "M250 465 C 400 460, 560 400, 676 330",
  "M145 555 L 145 530",
  "M250 620 C 250 480, 250 360, 300 240 C 450 240, 580 240, 650 240",
  "M145 700 C 400 790, 770 690, 874 562",
  "M310 650 C 380 520, 440 440, 478 397",
  "M330 650 C 420 580, 500 540, 558 528",
  "M510 700 C 530 700, 540 700, 558 700",
  "M510 745 C 650 770, 800 650, 862 562",
  "M760 697 C 800 660, 820 600, 850 575",
  "M760 720 C 850 760, 980 770, 1090 750",
  "M660 347 C 720 380, 780 410, 835 430",
  "M760 480 C 790 490, 810 495, 835 495",
  "M1420 700 C 1412 700, 1406 700, 1402 700",
  "M1400 240 C 1320 300, 1220 380, 1140 430",
  "M1410 255 C 1390 380, 1390 540, 1400 640",
  "M1400 387 C 1320 420, 1200 460, 1140 490"
];

export const DETAILS = {
  clients: {
    tagline: "Every entry point of the platform — the first and last hop of the request lifecycle.",
    what: "Browsers (React / Angular SPAs), mobile apps, CI pipelines and 3rd-party integrations that consume the public API. Each client speaks HTTPS to the edge and carries a stable correlation ID so one logical request can be traced end-to-end.",
    how: [
      "TLS 1.3 with 0-RTT session resumption; HTTP/3 over QUIC where the edge supports it",
      "Signed requests with HMAC API keys or OAuth bearer tokens; idempotency keys on POST",
      "Correlation ID (X-Request-Id) generated on the first hop and propagated downstream",
      "Retry budgets with exponential backoff + jitter; only retried when the failure is retryable",
      "Mobile offline queue that replays mutations once connectivity returns"
    ],
    fail: [
      "Client-side circuit breaker stops hammering a failing endpoint after N failures",
      "429 / 5xx responses trigger backoff instead of immediate retry",
      "Offline mutations reconciled via idempotency keys to avoid duplicates"
    ],
    spec: [
      ["Transport", "HTTPS / TLS 1.3 · HTTP/3"],
      ["Auth", "Bearer JWT · HMAC API keys"],
      ["Idempotency", "Client-generated keys on mutations"]
    ]
  },

  cloudflare: {
    tagline: "First network hop — DNS, CDN, TLS, WAF and DDoS mitigation at the nearest anycast PoP.",
    what: "Cloudflare terminates every client connection at the closest of ~300 anycast PoPs. It answers DNS, serves cached content, terminates TLS, filters traffic through the WAF, and absorbs L3/L4 volumetric attacks before anything reaches origin.",
    how: [
      "Anycast routing lands the client on the nearest PoP; DNS uses geo + latency-based steering with CNAME flattening and DNSSEC",
      "TLS termination at the edge: TLS 1.3, OCSP stapling, HSTS, and optional mTLS / authenticated origin pulls",
      "Managed WAF with OWASP CRS, custom rules, anomaly scoring and IP reputation",
      "Bot fight mode: JS / managed challenges, captchas and blocking based on bot scores",
      "L3/L4 DDoS mitigation absorbs volumetric floods at the edge; rate rules cap abusive bursts",
      "Ruleset engine chains request → rate → WAF → transform → origin for every request"
    ],
    fail: [
      "Origin goes down → edge serves stale cache or a graceful 5xx page while health-based steering fails over",
      "Anycast + rate rules absorb spikes without scaling origin",
      "WAF false positives tuned per zone with allow/deny overrides and logging mode first"
    ],
    spec: [
      ["Network", "Anycast · ~300 PoPs"],
      ["TLS", "1.3 · HSTS · mTLS origin pulls"],
      ["WAF", "OWASP CRS + custom rulesets"]
    ]
  },

  cdncache: {
    tagline: "Edge caching that keeps assets fast and origin warm — with safe, testable invalidation.",
    what: "A caching layer on top of the edge that stores static assets (JS/CSS/images) and cacheable API responses, reducing origin load and latency for repeat requests.",
    how: [
      "Cache-Control directives (max-age, stale-while-revalidate, no-store) drive behavior per response",
      "Conditional requests with ETag / If-None-Match return 304 to validate freshness",
      "Hashed filenames bust cache on new deploys; purge API invalidates by URL or cache tag",
      "stale-while-revalidate serves stale data instantly while refreshing in the background",
      "Vary on Accept, Accept-Encoding, and language headers to avoid serving wrong variants"
    ],
    fail: [
      "Purge propagation delay leaves a short stale-content window — mitigated by short TTLs on dynamic data",
      "Cache stampede on TTL expiry is avoided with request coalescing / single-flight",
      "Origin 5xx → stale response served (graceful degradation) with revalidation on next hit"
    ],
    spec: [
      ["TTL", "Static long · dynamic short"],
      ["Validation", "ETag / If-None-Match 304s"],
      ["Invalidation", "URL + tag purge"]
    ]
  },

  control: {
    tagline: "The control plane — config, validation, and lock-free hot reload without ever restarting the gateway.",
    what: "A sidecar-managed control plane that turns a versioned configuration into live routing and upstream behavior, propagated to all gateway workers in seconds — with zero downtime and full rollback safety.",
    how: [
      "Config service stores versioned YAML/JSON, runs validation and diffs before publishing",
      "Sidecar file-watches the config, generates NGINX fragments and builds an atomic snapshot",
      "ArcSwap performs a lock-free atomic pointer swap — workers pick up the new snapshot on next request",
      "Routing and upstream changes propagate to live workers in <6 seconds, no NGINX reload or restart",
      "Canary config rollout to a subset of workers first; audit trail records every generation and actor"
    ],
    fail: [
      "Invalid config is rejected at validation with a clear diff, alerting operators",
      "Swap failure keeps the previous good snapshot — the gateway stays on the last-known-good generation",
      "A dead file-watch is caught by a watchdog that restarts the sidecar"
    ],
    spec: [
      ["Reload", "<6s propagation"],
      ["Mechanism", "ArcSwap atomic pointer swap"],
      ["Safety", "Validate → canary → audit → rollback"]
    ]
  },

  gateway: {
    tagline: "Sub-millisecond edge data plane — it is the load balancer, the rate limiter and the security boundary, all in one hot path.",
    what: "The API gateway is the single entry to the service mesh: it terminates connections from the edge, balances load across the service fleet, authenticates, filters, rate-limits, routes, transforms and observes every request before forwarding it upstream. No separate LB or rate-limiter box exists — Kubernetes ingress and the gateway's own L7 engine cover both.",
    how: [
      "L7 load balancing: upstream pools with least_conn / weighted round-robin, keepalive connection reuse, active /healthz probes and passive max_fails ejection with connection draining",
      "Distributed rate limiting: Redis-backed counters (token bucket, sliding-window log via sorted sets, GCRA) with an in-memory local fast path and graceful degraded mode when Redis is down",
      "Rust FFI / Lua hot path performs JWT verification, header/route rewriting, request IDs and gzip/brotli — all in the data plane at sub-ms cost",
      "WAF + OWASP CRS inline: SQLi/XSS/SSRF detection with virtual patching and per-route circuit breakers (fail-fast with graceful fallbacks)",
      "API versioning (v1/v2 namespaces) with canary routing and OpenAPI / JSON-Schema validation",
      "UAM enforcement: checks the token-version floor on every authenticated request (instant revocation)",
      "Injects trace context (W3C Traceparent) and unified access logs for the observability stack"
    ],
    fail: [
      "Upstream timeout → 504 with a bounded retry budget",
      "Breaker trip → fail-fast 503 fallback (stale response or cached fallback)",
      "Redis down → rate limiter degrades to a local sliding-window approximation per node, replaying deltas when Redis recovers",
      "WAF block → 403 with rule-matched reason; malformed bodies → 400/422; over-limit → 429 with Retry-After"
    ],
    spec: [
      ["Hot path", "Rust FFI / Lua · sub-ms p95"],
      ["L7 LB", "least_conn · draining · /healthz"],
      ["Rate limit", "Token bucket · sliding log · GCRA (Redis)"],
      ["Security", "JWT · WAF · breaker · versioning"]
    ]
  },

  auth: {
    tagline: "Identity & access control — OAuth 2.0 / OIDC with instant, global session invalidation.",
    what: "The User Access Management service issues and validates tokens, manages sessions and evaluates access policies. Revocation is near-instant across the whole fleet using a token-version floor plus a bloom filter index for cheap short-circuiting.",
    how: [
      "OAuth 2.0 authorization code + PKCE; OIDC discovery exposes JWKS for stateless JWT verification (RS256)",
      "Access tokens (15m) + rotating refresh tokens; sessions stored in Redis with sliding TTL, idle and absolute timeouts",
      "Token-version floor: every token carries a version; Redis holds the user's current floor; tokens below it are rejected — logout-everywhere is one version bump",
      "Bloom filter indexes recently revoked tokens in memory so the common case is decided without Redis",
      "Policy engine evaluates RBAC / ABAC / ACL, scopes and claims (OPA-style decision point)",
      "Device fingerprinting, concurrent-session limits and anomaly-triggered re-auth"
    ],
    fail: [
      "Redis unavailable → auth reads a cached version floor and permits recent tokens, forcing re-auth on risk signals",
      "JWKS fetch failure → serves the cached signing keyset; keys rotate gracefully",
      "Token-version races avoided with a monotonic floor and per-user bump ordering"
    ],
    spec: [
      ["Protocol", "OAuth 2.0 + OIDC + PKCE"],
      ["Tokens", "JWT RS256 · 15m / refresh 7d"],
      ["Revocation", "Token-version floor + bloom filter"]
    ]
  },

  redis: {
    tagline: "The in-memory backbone — cache, sessions, rate-limit counters and distributed locks.",
    what: "A Redis Cluster serves multiple hot-path needs: response caching, session storage, rate-limit counters, pub/sub and distributed locking. It is the shared state that makes the stateless fleet consistent.",
    how: [
      "Cluster mode shards keys across 16384 slots with replicas; clients route by slot",
      "Eviction policies per database: allkeys-lru for caches, volatile-lfu for sessions with TTL",
      "Keyspace notifications + pub/sub drive cache invalidation and eviction hooks",
      "Cache stampede shield: single-flight coalesces concurrent misses; probabilistic early expiration jitters TTLs",
      "Distributed locks via SET NX PX / Redlock for idempotency and leader election",
      "Sorted sets implement sliding-window rate limits; Lua + pipelining keep operations atomic"
    ],
    fail: [
      "Master failure → replica promoted with quorum and cluster-epoch fencing",
      "Partial resync via PSYNC backlog on reconnect; RDB/AOF persistence per use-case",
      "For pure-cache use, a miss is safe (recompute); sessions degrade to a shorter-lived replica read"
    ],
    spec: [
      ["Mode", "Cluster · 16384 slots"],
      ["Eviction", "allkeys-lru · volatile-lfu"],
      ["Locks", "SET NX PX · Redlock"]
    ]
  },

  kafka: {
    tagline: "Async event bus — partitioned, replicated and exactly-once where it matters.",
    what: "Kafka (with RabbitMQ for request/reply queues) carries all events between services: order events, payment outcomes, notifications and analytics. The outbox pattern guarantees events are never lost when a DB transaction commits.",
    how: [
      "Topics partitioned for parallel consumption; replication factor 3 with ISR and leader election",
      "Consumer groups with committed offsets and rebalancing; lag is monitored",
      "Exactly-once via idempotent producers + transactional delivery; acks=all",
      "Outbox pattern: a service writes an event row in the same DB transaction, and an outbox relay publishes it to Kafka",
      "Schema registry (Avro / Protobuf) keeps producers and consumers compatible",
      "Dead-letter queues + retry topics with exponential backoff for poison messages"
    ],
    fail: [
      "Broker loss tolerated while ISR keeps a majority; partitions rebalance automatically",
      "Poison messages land in DLQ and are alerted, not dropped silently",
      "Consumer lag triggers autoscaling (KEDA) and alerting"
    ],
    spec: [
      ["Delivery", "acks=all · idempotent · exactly-once"],
      ["Replication", "factor 3 · ISR"],
      ["Relay", "Outbox + CDC"]
    ]
  },

  services: {
    tagline: "Stateless business logic — Java 21 / Node.js microservices with SAGA consistency.",
    what: "Auth, User, Order, Payment, Notification and Recommendation services implement the business logic. They are stateless and horizontally scaled behind the mesh, speaking gRPC/REST/GraphQL to each other and to the data layer.",
    how: [
      "gRPC over HTTP/2 with protobuf and mTLS for inter-service calls; REST/GraphQL federation at the API boundary",
      "Resilience toolkit: idempotency keys, retries with exponential backoff + jitter, timeouts, bulkheads, circuit breakers and request collapsing",
      "Data consistency via SAGA choreography with compensating actions; outbox + CDC publishes events",
      "IDs are never auto-generated: services pull Snowflake-style IDs in batches from the ID Service, so keys stay unique across every shard",
      "All DB access goes through pgBouncer pools — services never open raw connections, so shard count changes are invisible to them",
      "Connection pooling (HikariCP), prepared statements, and read-from-replica for fan-out queries",
      "Stateless pods → HPA scales by CPU/memory and custom (queue-depth) metrics"
    ],
    fail: [
      "Partial failures → graceful fallbacks and cache-first reads",
      "DB outage → bulkhead isolates the impacted service and degrades its feature set",
      "Duplicate events and retries are absorbed by idempotency keys"
    ],
    spec: [
      ["Stack", "Java 21 · Spring Boot · Node.js"],
      ["IPC", "gRPC · REST · GraphQL"],
      ["Consistency", "SAGA · outbox · 2PC where required"]
    ]
  },

  search: {
    tagline: "Full-text search and analytics — sharded, near-real-time, lifecycle-managed.",
    what: "Elasticsearch powers product/order/document search and analytics. It ingests data from services via CDC or dual-write and serves filtered, highlighted, aggregated queries.",
    how: [
      "Inverted index with analyzers and tokenizers per language; query DSL for complex filters",
      "Indices sharded with replicas; routing by document id keeps related docs co-located",
      "Refresh interval trades write latency for near-real-time visibility",
      "Index Lifecycle Management moves data hot → warm → cold with rollover and retention",
      "Sync from source DBs via CDC (Debezium) or dual-write, keeping search eventually consistent"
    ],
    fail: [
      "Shard loss → replica promotion; cluster yellow/red states alert",
      "Heavy queries hit the query circuit breaker and get rejected instead of OOM-ing",
      "Search outage → services fall back to a filtered DB query (degraded but functional)"
    ],
    spec: [
      ["Indexing", "Inverted index · analyzers"],
      ["Lifecycle", "ILM hot/warm/cold"],
      ["Sync", "CDC · dual-write"]
    ]
  },

  vector: {
    tagline: "Embedding search for RAG — HNSW, filters and quantized vectors.",
    what: "Qdrant stores embeddings for semantic search and retrieval-augmented generation: semantic chunking produces vectors that are indexed with HNSW and combined with payload filters for hybrid queries.",
    how: [
      "HNSW graph index (m, ef_construct) balances recall vs memory; cosine distance for embeddings",
      "Payload indexing + filters narrow results by tenant, date, type before/after vector scan",
      "Scalar / binary quantization shrinks memory ~4x with minimal recall loss",
      "Collections are sharded and replicated with snapshot-based backup/restore",
      "Hybrid retrieval: keyword (Elasticsearch) + semantic (Qdrant) merged with RRF / score blending"
    ],
    fail: [
      "Replica failover keeps reads available during node loss",
      "Snapshot restore recovers a collection; degraded mode falls back to lexical search",
      "Embedding pipeline failures route through retry + DLQ"
    ],
    spec: [
      ["Index", "HNSW · cosine"],
      ["Quantization", "scalar / binary"],
      ["Hybrid", "Keyword + vector · RRF merge"]
    ]
  },

  pgbouncer: {
    tagline: "The connection gatekeeper — thousands of app connections multiplexed into a few DB sockets.",
    what: "pgBouncer sits between the stateless services and the sharded PostgreSQL fleet. Every service instance keeps its own HikariCP pool; without pgBouncer that fan-in would exhaust Postgres' max_connections instantly. pgBouncer pools, inspects and multiplexes those connections so the database never sees connection churn.",
    how: [
      "Transaction pooling: a client's connection is returned to the pool at the end of each transaction, so one backend socket serves many clients sequentially",
      "Prepared-statement cache (protocol-level) keeps PgBouncer.DSN and statement plans reused across pool reuse",
      "Multiple pools per database/shard; pool_mode, max_client_conn, default_pool_size tuned per service tier",
      "Graceful shutdown drains in-flight transactions; server_idle_timeout and server_lifetime recycle stale sockets",
      "Auth via user/password map with SCRAM; integrates with the control-plane config push for pool tuning",
      "Latency < 1ms overhead; a single 4-core box sustains 30k+ clients"
    ],
    fail: [
      "Pool exhaustion → new clients queue briefly (client_idle_timeout) instead of failing; alerts on queue depth",
      "Backend DB failure → pooled connections are re-established lazily; services see retryable errors",
      "Rolling restart of pgBouncer keeps sockets hot via takeover + drain so no request is dropped"
    ],
    spec: [
      ["Mode", "Transaction pooling"],
      ["Capacity", "30k+ clients per box"],
      ["Overhead", "< 1ms per pool round-trip"]
    ]
  },

  datastore: {
    tagline: "Horizontally sharded PostgreSQL — virtual sharding with a lookup map, so scale is just another shard.",
    what: "The relational core is sharded across PostgreSQL nodes using virtual sharding: a small number of physical shards each host many logical virtual shards. A lookup vindex maps every row's shard key to its virtual shard, and the routing layer (with pgBouncer in front) sends each query to the right place — giving MySQL/Vitess-style linear write scaling on battle-tested PostgreSQL.",
    how: [
      "Virtual sharding: a deterministic hashing function maps each shard key (e.g. user_id) to one of 256 virtual shards; virtual shards are grouped onto physical shards (e.g. 256 vshards across 8 physical Postgres nodes)",
      "Lookup vindex: a small routing table (shard_key → vshard → physical node) consulted once per query, cached and refreshed by the control plane",
      "Unique data: the ID Service issues globally unique 64-bit IDs, so the same ID never collides across shards — no cross-shard uniqueness checks needed",
      "Range + hash strategies coexist: time-ranged partitions for append-heavy tables, hash for high-cardinality keys",
      "Transactions stay single-shard via shard-key affinity; cross-shard reads are fanned out and merged at the service layer (scatter/gather)",
      "Online resharding: splitting a hot physical shard moves virtual shards to new nodes with replication catch-up and a cutover point — no downtime",
      "CDC (Debezium/WAL) streams every commit to Kafka so search, vector and analytics stay eventually consistent"
    ],
    fail: [
      "Primary loss → fast failover to the shard replica with reparenting; routing map refreshes via the control plane",
      "Hot shard → virtual shards migrate to a fresh physical node; lookup vindex updates atomically",
      "Replication lag → read-after-write tracking routes a user's own writes to the primary until the replica catches up",
      "Node imbalance → rebalancer re-distributes virtual shards with throttled backfill"
    ],
    spec: [
      ["Sharding", "256 virtual shards · lookup vindex"],
      ["Identity", "Snowflake-style 64-bit IDs (cross-shard unique)"],
      ["Scale", "Linear write scaling · online reshard"]
    ]
  },

  idservice: {
    tagline: "The ID Service — globally unique, time-ordered, 64-bit identifiers, same family Instagram uses.",
    what: "Instagram/Facebook-scale systems never let a database auto-increment generate IDs across shards — collisions would be fatal. Instead a dedicated ID service hands out monotonic 64-bit IDs composed of timestamp + worker id + sequence. Every row in every shard gets a unique ID, so IDs can act as keys, order hints and shard-routing hints simultaneously.",
    how: [
      "Each 64-bit ID packs: 41 bits milliseconds since epoch + 10 bits worker/datacenter id + 12 bits in-worker sequence (Snowflake scheme)",
      "Services request a batch of IDs (e.g. 1024) over gRPC and cache them locally — the service is off the hot path",
      "Clock drift handled by NTP discipline; sequence wraps safely and worker ids are allocated from a coordination store (etcd/ZooKeeper)",
      "Time-ordered IDs enable range scans that are also chronologically sorted; the top bits can be decoded to a shard hint for even routing",
      "Workers generate IDs at hundreds of thousands per second per instance with zero cross-shard coordination"
    ],
    fail: [
      "Service outage → clients continue from their cached batch; the next fetch is lazy and retried",
      "Clock skew → sequence space absorbs it; worst case the worker pauses briefly instead of emitting duplicates",
      "Worker-id conflict → registration through the coordination store with fencing prevents two workers holding the same id"
    ],
    spec: [
      ["Scheme", "Snowflake 64-bit · ts + worker + seq"],
      ["Delivery", "Batched gRPC · local cache"],
      ["Rate", "100k+ IDs/sec per worker"]
    ]
  },

  replicas: {
    tagline: "Read replicas that absorb fan-out reads — with read-after-write protection and lag guards.",
    what: "Each physical shard keeps asynchronous streaming replicas for read scaling. Reporting, dashboards, search-index backfill and cache-warming all hit replicas; point reads for the current user prefer the primary or a lag-aware replica to guarantee read-your-writes.",
    how: [
      "Physical streaming replication (WAL) keeps each replica near real-time; lag is measured and exported to Prometheus",
      "Read-after-write: the user's last-write timestamp rides along in the request; routing picks a replica with lag below that watermark, else the primary",
      "Read-only workloads (analytics, exports) pinned to replicas via the gateway routing hints / pgBouncer pool split",
      "Replica promotion is the failover path: promotion is fenced to prevent split-brain, old primary demotes",
      "Delay-tolerant jobs read from lagging replicas to keep primary I/O dedicated to writes"
    ],
    fail: [
      "Replica falls behind → watermark guard routes reads to primary until it catches up",
      "Replica loss → reads shed to siblings/primary; cluster alerts on replication gap",
      "Failover → fencing + sequence bump in the routing map prevents stale reads and double-primary"
    ],
    spec: [
      ["Replication", "Streaming WAL · async"],
      ["Routing", "Lag-aware · read-after-write watermark"],
      ["Failover", "Fenced promotion"]
    ]
  },

  k8s: {
    tagline: "Orchestration — autoscaling, service mesh and zero-downtime deployment primitives.",
    what: "Kubernetes runs every stateless workload with declarative control: the API server + etcd form the source of truth, the scheduler places pods, and controllers reconcile desired state continuously.",
    how: [
      "Control plane: API server, etcd, scheduler, controller-manager across HA replicas",
      "HPA scales pods by CPU/memory/custom metrics; KEDA adds queue-depth and cron triggers; Cluster Autoscaler rightsizes node pools",
      "Envoy/Istio sidecars inject mTLS, retries, timeouts and circuit breaking; ingress controllers terminate external traffic",
      "Rolling updates, blue/green and canary (5%→50%→100%) with readiness/liveness/startup probes",
      "Pod disruption budgets protect quorum during maintenance; taints/tolerations + node affinity place pods",
      "Resource requests/limits with QoS classes prevent noisy neighbors"
    ],
    fail: [
      "Node loss → pods rescheduled; probe failures trigger restart or eviction",
      "PDBs block voluntary eviction when it would break availability",
      "HPA scale-down cooldowns avoid flapping; VPA adjusts limits over time"
    ],
    spec: [
      ["Control", "API server · etcd · scheduler"],
      ["Scaling", "HPA · KEDA · Cluster Autoscaler · VPA"],
      ["Delivery", "Rolling · blue-green · canary"]
    ]
  },

  obs: {
    tagline: "Full-stack observability — metrics, logs and traces unified by correlation IDs and SLOs.",
    what: "Prometheus and Datadog collect metrics, structured logs carry correlation IDs into ELK/Loki, and OpenTelemetry traces follow requests across every hop. SLOs and error budgets drive on-call priority.",
    how: [
      "Metrics: pull model (Prometheus) + Datadog agents; RED (rate/errors/duration) and USE (utilization/saturation/errors)",
      "Structured JSON logs with X-Request-Id / trace-id; sampling and log-based alerting",
      "Distributed tracing via OpenTelemetry → Jaeger/Zipkin using W3C trace context across all services",
      "Dashboards per SLO; alerts tiered by severity with on-call escalation",
      "Immutable audit trail (WORM storage) with tamper-evident hashing for compliance"
    ],
    fail: [
      "Pipeline backpressure → tail-based sampling protects storage",
      "Agent loss → local buffering with replay; alert fatigue reduced with tiered thresholds",
      "Trace sampling preserves p95 visibility via head + tail sampling"
    ],
    spec: [
      ["Metrics", "Prometheus · Datadog"],
      ["Tracing", "OpenTelemetry · Jaeger"],
      ["SLOs", "Error budgets drive priority"]
    ]
  }
};