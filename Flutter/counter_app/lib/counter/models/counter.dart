class Counter {
  final String username;
  final int count;

  const Counter({
    required this.username,
    required this.count,
  });

  Counter copyWith({
    String? username,
    int? count,
  }) {
    return Counter(
      username: username ?? this.username,
      count: count ?? this.count,
    );
  }
}