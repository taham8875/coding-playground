import 'package:counter_app/counter/models/counter.dart';
import 'package:counter_app/counter/state/counter_notifier.dart';
import 'package:flutter/material.dart';

class Provider<T extends Listenable> extends InheritedNotifier<T> {
  const Provider({
    super.key,
    required super.child,
    required super.notifier,
  });

  static T of<T extends Listenable>(BuildContext context) {
    final provider = context.dependOnInheritedWidgetOfExactType<Provider<T>>();

    if (provider == null) {
      throw Exception("No Provider found in context");
    }

    final notifier = provider.notifier;

    if (notifier == null) {
      throw Exception("No notifier found in Provider");
    }

    return notifier;
  }
}


void main() {
  runApp(
    Provider(
      notifier: CounterNotifier(
        const Counter(username: 'John Doe', count: 0),
      ),
      child: const MainApp(),
    ),
  );
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    final counterNotifier = Provider.of<CounterNotifier>(context);
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Text('${counterNotifier.value.username} | ${counterNotifier.value.count}'),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            counterNotifier.increment();
          },
          child: const Icon(Icons.add),
        )
      ),
      
    );
  }
}
