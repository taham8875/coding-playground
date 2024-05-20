import 'package:counter_app/counter/models/counter.dart';
import 'package:flutter/material.dart';

class CounterNotifier extends ValueNotifier<Counter> {
  CounterNotifier(super.state);

  void increment() {
    value = value.copyWith(count: value.count + 1);
  }
}